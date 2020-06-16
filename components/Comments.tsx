
interface CommentProps {
  slug: string
}

const Comments: React.FunctionComponent<CommentProps> = ({ slug }) => {
  console.log(slug);
  return (
    <div></div>
  )
}

export default Comments;