import axios from 'axios';

async function getPosts() {
  const response = await axios.get('http://localhost:1337/posts');
  return response;
}

async function addPost(postContent) {
  const response = await axios.post('http://localhost:1337/posts', postContent);
  return response;
}

export { getPosts, addPost };
