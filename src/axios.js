import axios from 'axios';

async function getPosts() {
  const response = await axios.get('https://arabic-translator.herokuapp.com/posts?_sort=createdAt:DESC');
  return response;
}

async function getPost(postId) {
  const respone = await axios.get(`https://arabic-translator.herokuapp.com/posts/${postId}`);
  return respone;
}

async function addPost(post) {
  const response = await axios.post('https://arabic-translator.herokuapp.com/posts', post);
  return response;
}

async function addSolution(solution) {
  const response = await axios.post(
    'https://arabic-translator.herokuapp.com/solutions',
    solution
  );
  return response;
}

async function addSolutionToPost(solutionId, postId) {
  getPost(postId).then( async res=>{
    const solutions = res.data.solutions;
    console.log("current solutions", solutions);
    const newSolutions = [solutionId, ...solutions]
    console.log("new solutions", newSolutions);

    const respone = await axios.put(`https://arabic-translator.herokuapp.com/posts/${postId}`, {solutions: newSolutions})
    return respone
  })
}
export { getPosts, addPost, addSolution, addSolutionToPost , getPost };
