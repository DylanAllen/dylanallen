import Layout from '../../components/Layout'
import { Heading, Paragraph, Box } from 'grommet';
import { meta as Udon } from './udon';
import { meta as Noiiice } from './noiiice';
import { MetaType } from '../../interfaces';
import Link from '../../components/Link';
import Picture from '../../components/Picture';


let posts: MetaType[] = [
  Noiiice,
  Udon
]

const PostCard: React.FunctionComponent<{ post: MetaType }> = ({ post }) => {

  return (
    <article className="post-summary">
      <Heading className="post-title" level={3}>{post.title}</Heading>
      <div className="post-card">
        <Paragraph className="post-desc">{post.description}</Paragraph>   
        <Picture className="post-image" fbpath={post.image} style={{height: "300px", width: "400px"}} overlayed={true} />   
        <div className="post-floater"></div>
        <Link className="post-link" path={`/blog/${post.slug}`}>View Post</Link>
        <div className="clear"></div>
      </div>
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
