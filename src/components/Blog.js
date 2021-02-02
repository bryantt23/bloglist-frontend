import React, { useState } from 'react';
import blogService from '../services/blogs';

const Blog = ({ blog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  };

  const [expanded, setExpanded] = useState(true);

  if (!expanded) {
    return (
      <div style={blogStyle}>
        Title: {blog.title}
        <button onClick={() => setExpanded(true)}>view</button>
      </div>
    );
  }

  let userName = getUserInfo().username;
  console.log('userName', userName);

  function getUserInfo() {
    return JSON.parse(localStorage.getItem('user'));
  }

  function checkIfUserBlog() {
    if (blog && blog.user && blog.user.username) {
      // console.log(blog.user._id);
      if (blog.user.username === userName) {
        console.log('match', blog);
        return true;
      }
    }
    return false;
  }

  const isUserBlog = checkIfUserBlog();

  function deleteBlog(blogId) {
    if (window.confirm('Delete this blog?')) {
      console.log('delete this');
      blogService.deleteBlog(blogId);
    } else {
      console.log('do not delete this');
    }
  }

  return (
    <div style={blogStyle}>
      {blog.title} {blog.author} {JSON.stringify(blog)}
      <p> Title: {blog.title}</p>
      <p> Url: {blog.url}</p>
      <p>
        Likes: {blog.likes}
        <button
          onClick={() => {
            blogService.addLike(blog.id, blog.likes);
            console.log(blog.id);
          }}
        >
          like
        </button>
      </p>
      <p> Author: {blog.author}</p>
      <button onClick={() => setExpanded(false)}>hide</button>
      {isUserBlog && (
        <button
          onClick={() => {
            deleteBlog(blog.id);
            // console.log('delete this');
          }}
        >
          delete
        </button>
      )}
    </div>
  );
};
export default Blog;
