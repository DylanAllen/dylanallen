import Layout from '../../components/Layout'
import { Heading, Paragraph, Image } from 'grommet';
import { useState, useEffect } from 'react';
import { getImage } from '../../utils/firebase'

const FirstPost: React.FunctionComponent  = () => {

  const [url, setImg] = useState('');

  useEffect(() => {
    (async () => {
      const img = await getImage(meta.image);
      setImg(img);
    })()
  },[])

  return (
    <Layout title="First Post | Dylan Allen | JavaScript Developer | Frontend Web">
      <Heading>First post</Heading>
      {url && <Image fit="cover" src={url} /> }
      <Paragraph>
        this is my blog
      </Paragraph>
      <Paragraph>
        not much to say.
      </Paragraph>
    </Layout>
  )
}

export const meta = {
  title: 'The First Post',
  description: 'This is the FIRST Post of the posts',
  image:  'images/webdev.png',
  slug: 'first',
  date: new Date(2020, 4, 10)
}

export default FirstPost;