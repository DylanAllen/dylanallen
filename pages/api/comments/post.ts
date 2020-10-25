import { NextApiRequest, NextApiResponse } from 'next'
import { SES } from 'aws-sdk'
import * as admin from 'firebase-admin';

const init = () => {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.project_id,
      privateKey:  (process.env.private_key) ? process.env.private_key.replace(/\\n/g, '\n') : '',
      clientEmail: process.env.client_email
    }),
    databaseURL: process.env.databaseURL
  });
}

const validateUser = async (token: string, uid: string) => {
  const verify = await admin.auth().verifyIdToken(token)
  return new Promise((resolve) => {
    if (verify.uid) {
      resolve(verify.uid === uid)
    } else {
      resolve(false);
    }
  })
  
}
  
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { message, slug, userid, displayname, token, avatar } = req.body;
  const dt = new Date();
  const id = dt.valueOf().toString();
  if (!admin.apps.length) {
    init()
  }

  const db = admin.firestore();
  const ref = db.collection('comments')
    .doc(slug)
    .collection('comments')
    .doc(id)

  const postToDb = (): Promise<{status: string, resp: any}> => {
    return new Promise (resolve => {
      ref
        .set({
          message: message,
          userid: userid,
          timestamp: new admin.firestore.Timestamp(Math.floor(dt.valueOf()/1000), dt.getMilliseconds()),
          displayname: displayname,
          status: 'pending',
          avatar: avatar ? avatar : ''
        }).catch(err => {
          resolve({status: '501', resp: err});
        }).then(() => {
          resolve({status: '200', resp: 'success'});
        })
    })
  }

  const sendEmail = () => {
    return new Promise(async (resolve) => {
      const ses = new SES({
        accessKeyId: process.env.aws_accessKey,
        secretAccessKey: process.env.aws_secretKey,
        region: process.env.aws_region
      })

      const params = {
        Destination: {
          ToAddresses: [process.env.to_email as string]
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data:
                `<html>
                  <body>
                    <h1>DylanAllen.net - New Post</h1>
                    <p>Name ${displayname}</p>
                    ${(avatar) ? `<img src="${avatar}" style="max-height: 200px; width: auto;"/>` : ''}
                    <p>${message}</p>
                    <p>
                      <a href="https://www.dylanallen.net/admin">Approve or delete this comment</a>
                    </p>
                  </body>
                </html>`
            },
            Text: {
              Charset: "UTF-8",
              Data: `Comment from ${displayname}: ${message}`
            }
          },
          Subject: {
            Charset: "UTF-8",
            Data: "Comment on DylanAllen.net"
          }
        },
        Source: process.env.from_email as string
      };
      await ses.sendEmail(params).promise();
      resolve(true)
    })
  }

  if (await validateUser(token, userid)) {
    return new Promise(async (resolve) => {
        const post = postToDb()
        await post;
        const email = await sendEmail()
        await email;
        if ((await post).status == '200') {
          res.status(200).json({ message: "Post submitted" })
          resolve()
        } else {
          res.status(501).json({ message: "Post failed due to error", err: (await post).resp})
          resolve();
        }
      })
  } else {

    res.status(402).json({ message: "User not authorized"})
    return Promise.resolve()

  }

  

}