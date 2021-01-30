import React, { useState, useEffect } from 'react';
import Blog from './components/Blog';
import blogService from './services/blogs';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const blogs = await blogService.getAll();
      const blogsArr = Object.entries(blogs).map(obj => obj[1]);
      setBlogs(blogsArr);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>blogs</h2>
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default App;
