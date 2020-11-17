import react, { useState, useEffect } from 'react';
import { getPosts } from '../axios'
import Post from './Post'
import '../index.css'
import FeedInputBox from './FeedInputBox';
import Header from './Header';
import Footer from './Footer';
import LoadingCircle from './LoadingCircle'

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updatePosts(null)
  }, []);


  const updatePosts = async () => {
    setLoading(true)
    getPosts().then(response => {
      setPosts(response.data);
      setLoading(false)
    })
  }

  return (
    <div className='App'>
      <Header></Header>
      <h2 className={'feedHeader'}>Feed</h2>
      <FeedInputBox setPosts={setPosts} updatePosts={updatePosts}></FeedInputBox>
      <div id="posts"><div className={'centered'}>{loading && <LoadingCircle></LoadingCircle>}</div>
        {posts.map((post, index) => {

          return <Post key={index} post={post} />
        })}</div>

      {/* <Footer></Footer> */}
    </div>
  )
}

export default App;
