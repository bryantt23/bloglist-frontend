import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/login';
//https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
const login = async (username, password) => {
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };
  fetch(baseUrl, requestOptions)
    .then(response => response.json())
    .then(data => console.log('data', data));

  console.log('login svc');
  console.log(username, password);
  //   const request = await axios.post(baseUrl);
  //   const data = await request.data;
  //   return data;
  // return request.then(response => response.data);
};

export default { login };
