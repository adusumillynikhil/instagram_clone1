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
  const [ savedPosts , setSavedPosts ] = useState([]);
  function handleNewPost(newpost)
    {
        setPosts(prev=>[newpost,...prev]);
    }
  function handleLike(postId)
  {
    setPosts(
      prev=>prev.map(post=>{
        if(post.post_id!=postId){
          return post;
        }
        const liked = !post.liked;
        return{
          ...post,
          liked : liked,
          likes_count: post.likes_count + (liked ? 1 : -1),
        }
      })
    )
  }
  function handleComment(postId,comments)
  {
    setPosts(
      prev=>prev.map(post=>{
        if (post.post_id!=postId){
          return post;
        }
        return{
          ...post,
          comments_count: post.comments_count + 1,
          comments:[
                    ...post.comments,
                    comments
                ]
        }
      })
    )
  }
  function handleSavedPost(postId)
  {
    setSavedPosts(prev=>{
      if(prev.includes(postId)) {
        return prev.filter(savedPost => savedPost !== postId);
      }
      return [...prev, postId];
    })
  }
  return (
    <BrowserRouter>
      <Sidebar setNewPost = {setNewPost}/>
      <MessageUtility />
      <Routes>
        <Route path = '/' element={<Container posts={posts} handleLike = {handleLike} handleComment={handleComment} handleSavedPost={handleSavedPost} savedPosts={savedPosts}/>} />
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
