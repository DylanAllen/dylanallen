import Layout from '../../components/Layout'
import { Heading, Paragraph } from 'grommet';

const SecondPost: React.FunctionComponent = () => (
  <Layout title="First Post | Dylan Allen | JavaScript Developer | Frontend Web">
    <Heading>Second post</Heading>
    <Paragraph>
      this is my blog
    </Paragraph>
    <Paragraph>
      not much to say.
    </Paragraph>
  </Layout>
)

export const meta = {
  title: 'Second Post',
  description: 'This is the 2nd Post of the posts',
  image: null,
  slug: 'second',
  date: new Date(2020, 4, 20)
}

export default SecondPost