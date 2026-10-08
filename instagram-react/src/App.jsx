import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import { posts as data } from './data/posts-data';
import { useState } from 'react';
import { Sidebar } from './components/sidebar';
import { MessageUtility } from './components/MessageUtility';
import { Container } from './components/Container';
import { Messages } from './components/Messages';
import { Profile } from './components/Profile';
import { NewPost } from './components/NewPost';
function App() {
  const [newPost , setNewPost] = useState(false);
  const [posts, setPosts] = useState(data);
  function handleNewPost(newpost)
    {
        setPosts(prev=>[newpost,...prev]);
    }
  return (
    <BrowserRouter>
      <Sidebar setNewPost = {setNewPost}/>
      <MessageUtility />
      <Routes>
        <Route path = '/' element={<Container posts={posts}/>} />
        <Route path = '/messages' element={<Messages />} />
        <Route path = '/profile' element={<Profile />} />
      </Routes>
      {
        newPost && (
          <NewPost handleNewPost={handleNewPost} setNewPost={setNewPost}/>
        )
      }
    </BrowserRouter>
  )
}

export default App
