import { useContext, useState, useEffect, FormEvent, ChangeEvent } from "react";
import { Context } from '../pages/_app';
import { firestore } from 'firebase';
import { Heading, TextArea, FormField } from 'grommet';

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
    firestore()
    .collection('comments')
    .doc(slug)
    .collection('comments')
    .onSnapshot((snapShot) => {
      console.log(snapShot.docs);

      const data = snapShot.docs.map(doc => doc.data() as CommentType);
      console.log(data);
      if (data) {
        updateComments(data);
      }
      
    })    

  },[])

  const postComment = (message: string) => {
    const dt = new Date();
    const id = dt.valueOf().toString();
    if (state.user) {
      firestore()
      .collection('comments')
      .doc(slug)
      .collection('comments')
      .doc(id)
      .set({
        message: message,
        userid: state.user.uid,
        timestamp: new firestore.Timestamp(Math.floor(dt.valueOf()/1000), dt.getMilliseconds()),
        displayname: state.user.displayName
      }).then(resp => {
        console.log(resp);
        setMessage('');
      })
    } else {
      alert('User not found');
    }    
  }

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  }

  const addComment = (event: FormEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();
    postComment(message);
  }
   
  return (
    <div className="commentsContainer">
      <Heading level={3}>Comments</Heading>
      <div className="comments">
        {(comments) ? comments.map((comment: any, i: number) => <Comment comment={comment} key={i}></Comment>) : <div>No comments</div>}
      </div>
      {(state.user) ? <div>
        <form
          onSubmit={addComment}
        >
          <FormField label="Post a comment." name="comment">
            <TextArea value={message} onChange={handleInputChange} ></TextArea>
          </FormField>
        </form>
      </div> : <NoComment></NoComment>}
    </div>
  )
}


export default Comments;