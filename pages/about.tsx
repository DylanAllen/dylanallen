import Layout from '../components/Layout'
import { Heading, Paragraph } from 'grommet';

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About Dylan Allen | JavaScript Developer | Frontend Web">
    <Heading>About</Heading>

      <Paragraph fill={true}>Hi. Thanks for googling me. I'm flattered. Get ready for the list of identities that profile pages and social media tag lines have made famous:</Paragraph>
      <Paragraph fill={true}>I am a software developer, musician, photographer, husband, father, Christian, <del>has-been-athlete</del> fitness enthusiast, coffee enthusiast, and kind of a nice guy who likes people.</Paragraph>
      <Paragraph fill={true}>You can find out more about things that I do here:</Paragraph>
      <ul>
      <li><a href="https://voicefoundry.com/">VoiceFoundry</a></li>
      <li><a href="http://dylanallen.net/resume">My Resume</a></li>
      <li><a href="https://github.com/DylanAllen/udon">GitHub</a></li>
      <li><a href="https://stackoverflow.com/users/story/6788666">Stack Overflow</a></li>
      <li><a href="http://dylanallenphotography.com">Dylan Allen Photography</a></li>
      <li><a href="http://reflejosflamencos.com">Reflejos Flamencos</a></li>
      <li><a href="http://flamencotulsa.com">FlamencoTulsa</a> </li>
      </ul>
  </Layout>
)

export default AboutPage
