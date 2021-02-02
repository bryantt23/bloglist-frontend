import React, { useState } from 'react';

const Blog = ({ blog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  };

  const [expanded, setExpanded] = useState(false);

  if (!expanded) {
    return (
      <div style={blogStyle}>
        Title: {blog.title}{' '}
        <button onClick={() => setExpanded(true)}>view</button>
      </div>
    );
  }

  return (
    <div style={blogStyle}>
      {blog.title} {blog.author}
      <p> Title: {blog.title}</p>
      <p> Url: {blog.url}</p>
      <p>
        {' '}
        Likes: {blog.likes}
        <button>like</button>
      </p>
      <p> Author: {blog.author}</p>
      <button onClick={() => setExpanded(false)}>hide</button>
    </div>
  );
};
export default Blog;
