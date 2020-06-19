import { useContext, useState, useEffect, ChangeEvent } from "react";
import { Context } from '../pages/_app';
import { firestore } from 'firebase';
import { Heading, TextArea, Button } from 'grommet';

interface CommentProps {
  slug: string
}

interface CommentType {
  userid: string;
  message: string;
  displayname: string;
  status: 'approved' | 'pending' | 'rejected';
  timestamp: firestore.Timestamp;
}

const NoComment = () => (
  <div className="no-comment">
    You must log in to leave a comment
  </div>
)

const Comment: React.FunctionComponent<{ comment: CommentType }> = ({ comment }) => (
  <div className="comment">
    <div className="username">{comment.displayname}</div>
    <div className="timestamp">{comment.timestamp.toDate().toLocaleDateString()} {comment.timestamp.toDate().toLocaleTimeString()}</div>
    <div className="message"><p className="messagespan">{comment.message}</p></div>
  </div>
)

const Comments: React.FunctionComponent<CommentProps> = ({ slug }) => {
  
  const state = useContext(Context)
  const [comments, updateComments] = useState<CommentType[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {

    let unsunscribe: any;
    if (unsunscribe) {
      unsunscribe();
    }
    unsunscribe = firestore()
    .collection('comments')
    .doc(slug)
    .collection('comments')
    .onSnapshot((snapShot) => {
      const data = snapShot.docs.map(doc => doc.data() as CommentType);
      if (data) {
        updateComments(data);
      }
    })   

  },[])

  const postComment = async (message: string) => {

    if (state.user) {
      const req = await fetch('/api/comments/post', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          slug: slug,
          message: message,
          displayname: state.user.displayName,
          userid: state.user.uid
        })
      })
      const res = await req.json()
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
        {(comments) ? comments.map((comment: any, i: number) => <Comment comment={comment} key={i}></Comment>) : <div>No comments</div>}
      </div>
      {(state.user) ? <div>
        <form
          onSubmit={addComment}
        >
            <TextArea value={message} onChange={handleInputChange} ></TextArea>
            <Button onClick={addComment}>Post</Button>
        </form>
      </div> : <NoComment></NoComment>}
    </div>
  )
}


export default Comments;