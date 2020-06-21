import { useContext, useState, useEffect } from "react";
import { Context } from '../pages/_app';
import { firestore } from 'firebase';
import { Trash, CheckboxSelected } from 'grommet-icons';
import { Heading } from 'grommet';
import Link from './Link';

interface CommentType {
  userid: string;
  message: string;
  displayname: string;
  status: 'approved' | 'pending' | 'rejected';
  timestamp: firestore.Timestamp;
  id: string;
  slug: string
}

const AdminComments: React.FunctionComponent = () => {
  
  const state = useContext(Context)
  const [comments, updateComments] = useState<CommentType[]>([]);
  const [trigger, update] = useState(0);
  const commentsRef = firestore().collection('comments');

  const Comment: React.FunctionComponent<{ comment: CommentType }> = ({ comment }) => (
    <div className="commentContainer">
      <Trash color="#453762" className="deleteComment" onClick={() => {deleteComment(comment.slug, comment.id )}} />
      { (comment.status !== 'approved') && <CheckboxSelected color="#453762" className="approveComment" onClick={() => {approveComment(comment.slug,comment.id)}} />}
      <div className="comment">
        <div className="username">{comment.displayname}</div>
        <div className="timestamp">{comment.timestamp.toDate().toLocaleDateString()} {comment.timestamp.toDate().toLocaleTimeString()}</div>
        <div className="message"><p className="messagespan">{comment.message}</p></div>
        <div className="slug"><Link path={`/blog/${comment.slug}`} label={comment.slug} /></div>
        <div className="status">{comment.status}</div>
      </div>
    </div>
  )

  const getComments = async () => {

    let allComments: CommentType[] = [];
    const posts = await commentsRef.get();

    const commentsPromise = posts.docs.map(async (post) => {
      let slug = post.id;
      return new Promise(async (resolve) => {
        const posts = (await post.ref.collection('comments').get()).docs
        posts.forEach((doc) => {
          allComments.push({...doc.data(), slug: slug, id: doc.id} as CommentType);
        })
        resolve(allComments)
      })
    })

    await Promise.all(commentsPromise);

    updateComments(allComments);

    return allComments;
  }

  useEffect(() => {

    let unsunscribe: any;
    if (unsunscribe) {
      unsunscribe();
    }
    unsunscribe = firestore()
    getComments();

  },[trigger])

  const apiPost = async (payload: any, url: string) => {

    return await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

  }

  const approveComment = async (slug: string, id: string) => {
    if (state.user) {
      const payload = {
        slug: slug,
        postid: id,
        token: await state.user.getIdToken()
      }

      const post = await apiPost(payload, '/api/comments/approve');
      const res = await post.json()
      if (post.status === 200) {
        console.log('approved');
        update(trigger + 1);
      } else {
        alert(res.message);
      } 
    } else {
      alert('User not found');
    }  
  }

  const deleteComment = async (slug: string, id: string) => {
    if (state.user) {
      const payload = {
        slug: slug,
        postid: id,
        token: await state.user.getIdToken()
      }

      const post = await apiPost(payload, '/api/comments/delete');
      const res = await post.json()
      if (post.status === 200) {
        console.log('deleted');
        update(trigger + 1);
      } else {
        alert(res.message)
      } 
    } else {
      alert('User not found');
    }  
  }
   
  return (
    <div className="commentsContainer">
      <Heading level={2}>Comments</Heading>
      <div className="comments">
        {(comments) ? comments.map((comment: any, i: number) => <Comment comment={comment} key={i}></Comment>) : <div>No comments</div>}
      </div>
    </div>
  )
}


export default AdminComments;