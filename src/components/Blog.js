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
    </div>
  );
};
export default Blog;
