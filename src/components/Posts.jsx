import { useNavigate, useOutletContext } from "react-router-dom";

const Posts = () => {

    const posts = useOutletContext();
    const navigate = useNavigate();

    const handleReadMoreClick = (postId) => {
        navigate(`/posts/${postId}`);
    }

  return (
      <div>
          {
              posts.map((post) => (
                  <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p style={{fontSize: "13px"}}>By {post.author}, Published on {post.createdAt.split("T")[0]}</p>
                    <p>{post.content} <button onClick={() => handleReadMoreClick(post.id)}>read more</button></p>
                  </div>
                ))
          }
    </div>
  )
}

export default Posts;