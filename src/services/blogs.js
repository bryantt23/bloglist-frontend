import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/blogs';
// import blogService from './services/blogs';

const getAll = async () => {
  const request = await axios.get(baseUrl);
  const data = await request.data;
  return data;
  // return request.then(response => response.data);
};

// https://stackoverflow.com/questions/50403231/request-api-node-js-using-bearer-token/50405905
const addBlog = async (title, author, url) => {
  const authorizationInfo = JSON.parse(localStorage.getItem('user')).token;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authorizationInfo}`
    },
    body: JSON.stringify({ title, author, url })
  };
  const data = await fetch(baseUrl, requestOptions);
  const res = await data.json();

  return res;
};

export default { getAll, addBlog };
