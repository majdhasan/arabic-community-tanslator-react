import react, { useState, useEffect } from 'react';
import { getPosts } from '../axios'
import Post from './Post'
import '../index.css'
import FeedInputBox from './FeedInputBox';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(response => {

      setPosts(response.data)
    })
  }, []);

  return (
    <div className='App'>
      <h1 className={'feedHeader'}>Feed</h1>
      <FeedInputBox></FeedInputBox>
      {posts.map(post => {

       return <Post content={post.content} />
      })}
    </div>
  )
}

export default App;
