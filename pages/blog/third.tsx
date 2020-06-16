import Layout from '../../components/Layout'
import { Heading, Paragraph } from 'grommet';

const Third: React.FunctionComponent<{state: any}> = ({state}) => (
  <Layout title="Third Post | Dylan Allen | JavaScript Developer | Frontend Web" state={state}>
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
  image: 'images/noiiice-_DSF3327.jpg',
  slug: 'third',
  date: new Date(2020, 4, 30)
}

export default Third