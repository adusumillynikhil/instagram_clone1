import { story }  from '../data/posts-data';
import { Story } from './Story';
import './Story.css';
import { useState } from 'react';
import { Post } from './Post';
import { Comments } from './Comments';
export function Container({posts , handleLike , handleComment , handleSavedPost , savedPosts}) {
    const [showComments , setShowComments] = useState(false);
    const [selectedPostId , setSelectedPostId] = useState(null);
    function openComments(post){
        setSelectedPostId(post.id);
        setShowComments(true);
    }
    function closeComments(){
        setShowComments(false);
        setSelectedPostId(null);
    }
    const selectedPost = posts.find(
        post => post.id === selectedPostId
    ) ?? null; 
    return (
            <div className="container">
                <main className="main-section">
                    <div className="story-section">
                        <Story story={story} />
                    </div>
                    <div className="post-grid js-post-grid">
                        {
                            posts.map((post)=>(
                                <Post key={post.id} post = {post} onCommentClick = {()=>openComments(post)} handleLike={handleLike} handleSavedPost={handleSavedPost} savedPosts = {savedPosts}/>
                            ))
                        }
                    </div>
                </main>
                {
                            showComments && selectedPost && (
                                <Comments post={selectedPost} onClose = {closeComments} handleComment ={handleComment}/>
                            )
                        }
            </div>
    )
}