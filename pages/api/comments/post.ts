import { NextApiRequest, NextApiResponse } from 'next'
// import * as admin from 'firebase-admin';

type Data = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log(req);
  res.status(200).json({ name: 'John Doe' })
}