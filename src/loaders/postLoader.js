import axios from "axios";

const postLoader = async ({ params }) => {
    // make a request to the server
    const response = await axios.get(`https://66c2e608d057009ee9be3fd7.mockapi.io/posts/${params.postId}`);
  
    // return the response
    return response.data;
}

export default postLoader;