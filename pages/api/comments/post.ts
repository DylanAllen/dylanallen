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
  
export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  const { message, slug, userid, displayname } = req.body;
  const dt = new Date();
  const id = dt.valueOf().toString();
  if (!admin.apps.length) {
    init()
  }

  console.log('gettting db');
  const db = admin.firestore();

  return new Promise(resolve => {
    db.collection('comments')
      .doc(slug)
      .collection('comments')
      .doc(id)
      .set({
        message: message,
        userid: userid,
        timestamp: new admin.firestore.Timestamp(Math.floor(dt.valueOf()/1000), dt.getMilliseconds()),
        displayname: displayname
      }).catch(err => {
        res.status(501).json({ message: "Post failed due to error", err: err})
        resolve();
      }).then(() => {
        res.status(200).json({ message: "Post submitted" })
        resolve();
      })

    })

}