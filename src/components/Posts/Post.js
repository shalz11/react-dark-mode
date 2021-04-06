const Post = ({ title, body }) => {
  //const { title, body } = list;
  return (
    <div className="post">
      <h4>Title: {title}</h4>
      <p>{body}</p>
    </div>
  );
};

export default Post;
