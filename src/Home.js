import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'website', body:'hello world', author: 'andrew', id:1},
    {title: 'party', body:'hello world', author: 'gloria', id:2},
    {title: 'top tips', body:'hello world', author: 'andrew', id:3},
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran')
  });

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title = "Dummy Blogs" handleDelete={handleDelete}/>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'andrew')} title = "Andrew Blogs"/>
    </div>
  );
}

export default Home;