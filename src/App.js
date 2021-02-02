import React, { useState, useEffect } from 'react';
import Blog from './components/Blog';
import blogService from './services/blogs';
import userService from './services/users';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleLogin = async e => {
    e.preventDefault();
    const res = await userService.login(username, password);
    if (res.error) {
      console.log(res.error);
    } else {
      const { name, username } = res;
      setUser({ name, username });
    }
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const blogs = await blogService.getAll();
      const blogsArr = Object.entries(blogs).map(obj => obj[1]);
      setBlogs(blogsArr);
    }
    fetchData();
  }, []);

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <form onSubmit={handleLogin}>
          <input onChange={e => setUsername(e.target.value)} />
          <input onChange={e => setPassword(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }

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
