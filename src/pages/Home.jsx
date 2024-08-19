import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {

    const posts = useLoaderData();

  return (
      <div>
        <h1>Blogger</h1>
        <p>Welcome to Blogger, a place where you can share your thoughts with the world.</p>
          
          <Outlet 
              context={posts}
        />
    </div>
  )
}

export default Home;