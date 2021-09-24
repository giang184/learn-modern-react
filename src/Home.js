import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

  return ( 
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title = "Dummy Blogs" />}

      {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'andrew')} title = "Andrew Blogs"/>}
    </div>
  );
}

export default Home;