import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./components/Posts";
import postsLoader from "./loaders/postsLoader";
import Post from "./components/Post";
import postLoader from "./loaders/postLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: postsLoader,
    children: [
      {
        path: "",
        element: <Posts />,
      }
    ]
  },
  {
    path: "/posts/:postId",
    element: <Post />,
    loader: postLoader
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App;