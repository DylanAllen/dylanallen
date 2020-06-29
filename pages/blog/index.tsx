import Layout from '../../components/Layout'
import { meta as Udon } from './udon';
import { meta as Noiiice } from './noiiice';
import { MetaType } from '../../interfaces';
import Link from 'next/link';
import Picture from '../../components/Picture';
import { useRouter } from 'next/router';

let posts: MetaType[] = [
  Noiiice,
  Udon
]

const PostCard: React.FunctionComponent<{ post: MetaType }> = ({ post }) => {

  const router = useRouter();
  const gotToPost = (url: string) => {
    router.push(`/blog/${url}`);
  }

  return (
    <article className="post-summary">
      <h2 className="post-title" onClick={() => {gotToPost(post.slug)}}>{post.title}</h2>
      <div className="post-card">
        <p className="post-desc">{post.description}</p>   
        <Picture className="post-image" fbpath={post.image} style={{height: "300px", width: "400px"}} overlayed={true} onClick={() => {gotToPost(post.slug)}}/>   
        <div className="post-floater"></div>
        <Link href={`/blog/${post.slug}`}><a className="post-link">View Post</a></Link>
        <div className="clear"></div>
      </div>
    </article>
  )
}

const Blog: React.FunctionComponent<{state: any }> = () => {

  return (
    <Layout title="Blog | Dylan Allen | JavaScript Developer | Frontend Web">
          <h1>Blog</h1>
          <div className="post-list">
            {posts.map(post => <PostCard post={post} key={post.slug}></PostCard>)}
          </div>
    </Layout>
  )
}

export default Blog
