# DylanAllen.net

This is my personal site, built with Next.JS, TypeScript, Firebase Authenticateion, FireStore DB, & Vercel.

## Setup

Download and install
```bash
git clone https://github.com/DylanAllen/dylanallen.git
cd dylanallen
npm i
```

Setup a Firebase project and create a `firebase.config.ts` file:

`firebase.config.ts`
```js
export const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: ...",
    measurementId: "..."
  };
 
```

Setup a [Firebase Service account](https://firebase.google.com/docs/admin/setup#initialize-sdk) and create a `.env.local` with the following info:

```
project_id=...
private_key=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
client_email=...
```

Run locally:

```bash
npm run dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
