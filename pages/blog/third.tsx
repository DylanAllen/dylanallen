import Layout from '../../components/Layout'

const Third: React.FunctionComponent<{state: any}> = () => (
  <Layout title="Third Post | Dylan Allen | JavaScript Developer | Frontend Web">
    <h1>Third post</h1>
    <p>
      this is my blog
    </p>
    <p>
      not much to say.
    </p>
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