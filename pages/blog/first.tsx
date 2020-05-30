import Layout from '../../components/Layout'
import { Heading, Paragraph } from 'grommet';

const FirstPost: React.FunctionComponent  = () => (
  <Layout title="First Post | Dylan Allen | JavaScript Developer | Frontend Web">
    <Heading>First post</Heading>
    <Paragraph>
      this is my blog
    </Paragraph>
    <Paragraph>
      not much to say.
    </Paragraph>
  </Layout>
)

export const meta = {
  title: 'First Post',
  description: 'This is the FIRST Post of the posts',
  image: null,
  slug: 'first',
  date: new Date(2020, 4, 10)
}

export default FirstPost;