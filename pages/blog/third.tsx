import Layout from '../../components/Layout'
import { Heading, Paragraph } from 'grommet';

const Third: React.FunctionComponent = () => (
  <Layout title="Third Post | Dylan Allen | JavaScript Developer | Frontend Web">
    <Heading>Third post</Heading>
    <Paragraph>
      this is my blog
    </Paragraph>
    <Paragraph>
      not much to say.
    </Paragraph>
  </Layout>
)

export const meta = {
  title: 'Third Post',
  description: 'This is the Third Post of the posts',
  image: null,
  slug: 'third',
  date: new Date(2020, 4, 30)
}

export default Third