import Layout from '../../components/Layout'
import { Heading, Paragraph, Box, Image } from 'grommet';
import { meta as P1 } from './first';
import { meta as P2 } from './second';
import { meta as P3 } from './third';
import { MetaType } from '../../interfaces';
import Link from '../../components/Link';
import Picture from '../../components/Picture';

let posts: MetaType[] = [
  P1,
  P2,
  P3
]

const PostCard: React.FunctionComponent<{ post: MetaType }> = ({ post }) => {

  return (
    <article className="post-summary">
      <Heading level={3}>{post.title}</Heading>
      <Paragraph>{post.description}</Paragraph>
      <Picture fbpath={post.image} style={{height: "300px", width: "300px"}} />
      <Link path={`/blog/${post.slug}`}>View Post</Link>
    </article>
  )
}

const Blog: React.FunctionComponent = () => {



  return (
    <Layout title="Blog | Dylan Allen | JavaScript Developer | Frontend Web">
      <Heading>Blog</Heading>
      <Box className="post-list">
        {posts.map(post => <PostCard post={post} key={post.slug}></PostCard>)}
      </Box>
    </Layout>
  )
}

export default Blog
