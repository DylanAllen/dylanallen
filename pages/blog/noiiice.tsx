import Layout from '../../components/Layout'
import { Heading, Markdown } from 'grommet';
import Picture from '../../components/Picture';


const md = `For the past several months I have been working on a blog CMS, and it is finally ready to use! I have a few more features that I wan to add before I give it to 1.0 distinction, but it is available on [Github](https://github.com/DylanAllen/noiiice) to clone and deploy. You can see the demo site here: [Noiiice.com](https://noiiice.com/).  

Noiiice is an open source blog platform built with the Serverless framework, NuxtJS, AWS Lambda, DynamoDB, API Gateway, S3, and Cognito. The serverless architecture provides fast performance, virtually infinite scalability, and very cheap to operate. 

## Features:
- Authentication system/account creation in app (using AWS Cognito)
- Admin UI to create/manage posts, and manage comments
- Automated emails when comments created
- Server side rendering on blog, posts, and pages (posts stored in DynamoDb table and dynamically rendered, pages coded in Nuxt framework)
- A few base themes, and a SCSS based theming system with light/dark mode detection
- Google Analytics integration
- Media manager (image upload, browse images, and copy url/img tag)
- Comment API throttling for users (using AWS API Gateway)
- Automated deployment with Serverless framework.

I am still actively developing this platform (in my spare time) so more features will be coming soon. If you want to give it a try, go to the GitHub page and follow the deployment instruction on the README. If you run into issue, or have question, feel free to post a Github issue on the repo, or comment on this post: [Install Noiiice](https://noiiice.com/post/install)`;

const Noiiice: React.FunctionComponent  = () => {

  return (
    <Layout title={`${meta.title} | Dylan Allen | JavaScript Developer | Frontend Web`}>
      <Heading>{meta.title}</Heading>
      <Picture fbpath={meta.image} style={{width: '100%', height: '45vw', maxHeight: '700px' }}></Picture>
      <Markdown>{md}</Markdown>
    </Layout>
  )
}

export const meta = {
  title: 'Noiiice Blog CMS',
  description: 'Noiiice is an open source blog platform built with the Serverless framework, NuxtJS, AWS Lambda, DynamoDB, API Gateway, S3, and Cognito. The serverless architecture provides fast performance, virtually infinite scalability, and very cheap to operate.',
  image:  'images/NoiiiceScreenshot.png',
  slug: 'noiiice',
  date: new Date(2020, 5, 3)
}

export default Noiiice;