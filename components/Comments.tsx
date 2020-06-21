import { useContext, useState, useEffect, ChangeEvent } from "react";
import { Context } from '../pages/_app';
import { firestore } from 'firebase';
import { Heading, TextArea, Button } from 'grommet';
import { Trash } from 'grommet-icons';

interface CommentProps {
  slug: string
}

interface CommentType {
  userid: string;
  message: string;
  displayname: string;
  status: 'approved' | 'pending' | 'rejected';
  timestamp: firestore.Timestamp;
  id: string;
  avatar?: string;
}

const NoComment = () => (
  <div className="no-comment">
    You must log in to leave a comment
  </div>
)

const deleteComment = async (id: string, ref: firestore.CollectionReference<firestore.DocumentData>) => {
  try {
    const del = await ref.doc(id).delete();
    console.log(del);
  } catch(err) {
    console.error(err);
    alert('Error deleting comment');
  }   
}

const Comments: React.FunctionComponent<CommentProps> = ({ slug }) => {
  
  const state = useContext(Context)
  const [comments, updateComments] = useState<CommentType[]>([]);
  const [message, setMessage] = useState('');
  const commentsRef = firestore().collection('comments').doc(slug).collection('comments');

  const Comment: React.FunctionComponent<{ comment: CommentType } & {dbRef: firestore.CollectionReference<firestore.DocumentData>}> = ({ comment, dbRef }) => (
    <div className="commentContainer">
      {(state.user && state.user.uid === comment.userid) && <Trash color="#453762" className="deleteComment" onClick={() => {deleteComment(comment.id, dbRef)}} />}  
      <div className="comment">
        <div className="username">{ comment.avatar ? <img src={comment.avatar} className="avatar-sm" /> : ''}<span>{comment.displayname}</span></div>
        <div className="timestamp">{comment.timestamp.toDate().toLocaleDateString()} {comment.timestamp.toDate().toLocaleTimeString()}</div>
        <div className="message"><p className="messagespan">{comment.message}</p></div>
      </div>
    </div>
  )

  useEffect(() => {

    let unsunscribe: any;
    if (unsunscribe) {
      unsunscribe();
    }
    unsunscribe = firestore()
    commentsRef
    .where('status', '==', 'approved')
    .onSnapshot((snapShot) => {
      const data = snapShot.docs.map(doc => {
        console.log(doc.data());
        return { ...doc.data(), id: doc.id } as CommentType;
      });
      if (data) {
        updateComments(data);
      }
    })   

  },[])

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

  const postComment = async (message: string) => {
    if (state.user) {
      const payload = {
        slug: slug,
        message: message,
        displayname: state.user.displayName,
        userid: state.user.uid,
        token: await state.user.getIdToken(),
        avatar: state.user.photoURL
      }

      const post = await apiPost(payload, '/api/comments/post');
      const res = await post.json()
      if (res.message == 'Post submitted') {
        setMessage('');
      } else {
        alert(res.message)
      } 
    } else {
      alert('User not found');
    }   
  }

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  }

  const addComment = (event: any) => {
    event.preventDefault();
    postComment(message);
  }
   
  return (
    <div className="commentsContainer">
      <Heading level={2}>Comments</Heading>
      <div className="comments">
        {(comments) ? comments.map((comment: any, i: number) => <Comment comment={comment} dbRef={commentsRef} key={i}></Comment>) : <div>No comments</div>}
      </div>
      {(state.user) ? <div>
        <form
          onSubmit={addComment}
        >
            <TextArea value={message} onChange={handleInputChange} ></TextArea>
            <Button primary onClick={addComment} label="Post Comment" />
        </form>
      </div> : <NoComment></NoComment>}
    </div>
  )
}


export default Comments;