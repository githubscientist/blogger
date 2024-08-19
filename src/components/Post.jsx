import { useLoaderData } from "react-router-dom";

const Post = () => {

    const post = useLoaderData();
    
  return (
      <div>
        <h2>{post.title}</h2>
        <p style={{fontSize: "13px"}}>By {post.author}, Published on {post.createdAt.split("T")[0]}</p>
        <p>{post.content}</p>
          <button>Edit</button>{" "}
          <button>Delete</button>
    </div>
  )
}

export default Post;