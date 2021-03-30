import { meta as Udon } from '../pages/blog/udon';
import { meta as Noiiice } from '../pages/blog/noiiice';
import { MetaType } from '../interfaces';
import Link from 'next/link';
import Picture from '../components/Picture';
import { useRouter } from 'next/router';
import { meta as NewSite } from '../pages/blog/newsite';
import { meta as Moov } from '../pages/blog/moov';
import { meta as Toast } from '../pages/blog/toast';
import { meta as BookReviews } from '../pages/blog/book-reviews';
import {meta as Accelerate1} from '../pages/blog/accelerate-1';
import { motion } from 'framer-motion';

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
}


let posts: MetaType[] = [
  Accelerate1,
  BookReviews,
  Toast,
  Moov,
  NewSite,
  Noiiice,
  Udon
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
    <motion.article
      variants={item}
      className="post-summary"
    >
      <h2 className="post-title" onClick={() => {gotToPost(post.slug)}}>{post.title}</h2>
      <div className="post-card">
        <p className="post-desc">{post.description}</p>   
        <Picture
          className="post-image"
          src={post.image} style={{height: imgHeight, width: imgWidth}}
          overlayed={true}
          onClick={() => {gotToPost(post.slug)}}
        />   
        <div className="post-floater"></div>
        <Link href={`/blog/${post.slug}`}><a className="post-link">View Post</a></Link>
        <div className="clear"></div>
      </div>
    </motion.article>
  )
}

const PostList: React.FunctionComponent<PostsProps> = ({imgHeight, imgWidth, className}) => {

  return (
    <motion.div
      className={"post-list " + className}
      variants={list}
      initial="hidden"
      animate="visible"
    >
      {posts.map(post => <PostCard post={post} key={post.slug} imgHeight={ (imgHeight) ? imgHeight : "300px" } imgWidth={(imgWidth)? imgWidth : "400px"}></PostCard>)}
    </motion.div>
  )
}

export default PostList
