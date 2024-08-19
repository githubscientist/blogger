import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

const Post = () => {

    const post = useLoaderData();

    const navigate = useNavigate();

    const handleDeletePost = () => {
        // get a confirmation from the user before deleting the post
        const toProceed = window.confirm("Are you sure you want to delete this post?")

        // if the user confirms, delete the post
        if (toProceed) {
            // make a request to the server to delete the post
            axios.delete(`https://66c2e608d057009ee9be3fd7.mockapi.io/posts/${post.id}`)
                .then(() => {
                    alert("Post deleted successfully");

                    // navigate to the home page
                    navigate("/");
                })
        }
    }
    
  return (
      <div>
        <h2>{post.title}</h2>
        <p style={{fontSize: "13px"}}>By {post.author}, Published on {post.createdAt.split("T")[0]}</p>
        <p>{post.content}</p>
          <button>Edit</button>{" "}
          <button onClick={handleDeletePost}>Delete</button>
    </div>
  )
}

export default Post;