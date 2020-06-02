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
  title: 'Post Number Two',
  description: 'This is the 2nd Post',
  image: 'images/noiiice-_DSF8794-Edit.jpg',
  slug: 'second',
  date: new Date(2020, 4, 20)
}

export default SecondPost