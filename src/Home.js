import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout( () => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json();
        }).then(data => {
          setBlogs(data);
          setIsPending(false);
        });
    }, 500);

  }, []);

  return ( 
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title = "Dummy Blogs" />}

      {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'andrew')} title = "Andrew Blogs"/>}
    </div>
  );
}

export default Home;