import axios from "axios";

const postsLoader = async () => {
    // make a request to the server
    const response = await axios.get(`https://66c2e608d057009ee9be3fd7.mockapi.io/posts`);

    // return the response
    return response.data;
}

export default postsLoader;