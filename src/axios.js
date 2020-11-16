import axios from 'axios'


async function getPosts (){
    const response = await axios.get('http://localhost:1337/posts');
    return response;
}

export {
    getPosts
}