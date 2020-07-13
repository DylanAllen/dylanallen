import Layout from '../components/Layout'

const AboutPage: React.FunctionComponent<{state: any }> = () => (
  <Layout title="About Dylan Allen | JavaScript Developer | Frontend Web">
    <div className="container">
      <h1>About</h1>

      <p>Hi. Thanks for googling me. I'm flattered. Get ready for the list of identities that profile pages and social media tag lines have made famous:</p>
      <p>I am a frontend web developer, husband, father, Christian, musician, photographer, <del>has-been-athlete</del> fitness enthusiast, who loves coffee, tacos, noodles, and cooking outside.</p>
      <p>You can find out more about things that I do here:</p>
      <ul>
        <li><a href="https://github.com/DylanAllen/udon">GitHub</a></li>
        <li><a href="https://stackoverflow.com/users/story/6788666">Stack Overflow</a></li>
        <li><a href="http://reflejosflamencos.com">Reflejos Flamencos</a></li>
        <li><a href="http://flamencotulsa.com">FlamencoTulsa</a> </li>
      </ul>
    </div>
  </Layout>
)

export default AboutPage
