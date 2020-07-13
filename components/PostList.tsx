import { meta as Udon } from '../pages/blog/udon';
import { meta as Noiiice } from '../pages/blog/noiiice';
import { MetaType } from '../interfaces';
import Link from 'next/link';
import Picture from '../components/Picture';
import { useRouter } from 'next/router';
import { meta as NewSite} from '../pages/blog/newsite';

let posts: MetaType[] = [
  NewSite,
  Noiiice,
  Udon,
]

interface PostsProps {
  imgHeight?: string;
  imgWidth?: string;
  className?: string;
}

interface PostProps {
  post: MetaType;
  imgHeight?: string;
  imgWidth?: string;
  className?: string;
}

const PostCard: React.FunctionComponent<PostProps> = ({ post, imgHeight, imgWidth }) => {

  const router = useRouter();
  const gotToPost = (url: string) => {
    router.push(`/blog/${url}`);
  }

  return (
    <article className="post-summary">
      <h2 className="post-title" onClick={() => {gotToPost(post.slug)}}>{post.title}</h2>
      <div className="post-card">
        <p className="post-desc">{post.description}</p>   
        <Picture
          className="post-image"
          fbpath={post.image} style={{height: imgHeight, width: imgWidth}}
          overlayed={true}
          onClick={() => {gotToPost(post.slug)}}
        />   
        <div className="post-floater"></div>
        <Link href={`/blog/${post.slug}`}><a className="post-link">View Post</a></Link>
        <div className="clear"></div>
      </div>
    </article>
  )
}

const PostList: React.FunctionComponent<PostsProps> = ({imgHeight, imgWidth, className}) => {

  return (
    <div className={"post-list " + className}>
      {posts.map(post => <PostCard post={post} key={post.slug} imgHeight={ (imgHeight) ? imgHeight : "300px" } imgWidth={(imgWidth)? imgWidth : "400px"}></PostCard>)}
    </div>
  )
}

export default PostList
