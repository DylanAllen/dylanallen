import { NextApiRequest, NextApiResponse } from 'next'
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
  console.log(req.body);
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

  if (await validateUser(token, userid)) {
    return new Promise(resolve => {
      ref
        .set({
          message: message,
          userid: userid,
          timestamp: new admin.firestore.Timestamp(Math.floor(dt.valueOf()/1000), dt.getMilliseconds()),
          displayname: displayname,
          status: 'pending',
          avatar: avatar ? avatar : ''
        }).catch(err => {
          res.status(501).json({ message: "Post failed due to error", err: err})
          resolve();
        }).then(() => {
          res.status(200).json({ message: "Post submitted" })
          resolve();
        })
  
      })
  } else {

    res.status(402).json({ message: "User not authorized"})
    return Promise.resolve()

  }

  

}