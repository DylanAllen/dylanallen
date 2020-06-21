import Layout from '../components/Layout'
import { Heading, Paragraph } from 'grommet';

const Leyla: React.FunctionComponent<{state: any }> = () => (
  <Layout title="About Leyla Allen | 5 year old | I love you">
    <Heading>Leyla</Heading>

      <Paragraph fill={true}>
        Leyla. i love you. You are talented and good. 
      </Paragraph>
      <Paragraph fill={true}>
        Leyla Rose Allen and you. Dad where are you? Let the world come to you.
      </Paragraph>
      <Paragraph fill={true}>
        leyla i am 5. and you leyla.
      </Paragraph>
  </Layout>
)

export default Leyla
