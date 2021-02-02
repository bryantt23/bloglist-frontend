import React, { useState, useEffect } from 'react';

function AddBlog() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('sumbit');
  };

  return (
    <div>
      <h1>Create new</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type='text'
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Author:
          <input
            type='text'
            value={author}
            onChange={e => {
              setAuthor(e.target.value);
            }}
          />
        </label>
        <label>
          URL:
          <input
            type='text'
            value={url}
            onChange={e => {
              setUrl(e.target.value);
            }}
          />
        </label>
        <input type='submit' value='Submit' />
        {/* <button onClick=>Submit</button> */}
      </form>
    </div>
  );
}

export default AddBlog;
