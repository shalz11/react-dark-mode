import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    setPosts(result);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="posts-container">
      {posts && posts.map((post) => <Post key={post.id} {...post} />)}
    </div>
  );
};

export default Posts;
