import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'website', body:'hello world', author: 'andrew', id:1},
    {title: 'party', body:'hello world', author: 'gloria', id:2},
    {title: 'top tips', body:'hello world', author: 'kent', id:3},
  ]);


  return ( 
    <div className="home">
      <BlogList blogs={blogs} title = "Dummy Blogs"/>
    </div>
  );
}

export default Home;