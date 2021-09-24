import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
    {title: 'website', body:'hello world', author: 'andrew', id:1},
    {title: 'party', body:'hello world', author: 'gloria', id:2},
    {title: 'top tips', body:'hello world', author: 'andrew', id:3},
  ]);

  const [name, setName] = useState('andrew');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran')
    console.log(name)

  }, [name]);

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title = "Dummy Blogs" handleDelete={handleDelete}/>
      <p>{name}</p>
      <button onClick={() =>setName('Phuc')}>Change Name</button>

      <BlogList blogs={blogs.filter((blog) => blog.author === 'andrew')} title = "Andrew Blogs" handleDelete={handleDelete}/>
    </div>
  );
}

export default Home;