import { posts, story } from '../data/posts-data';
import { Story } from './Story';
import './Story.css';
import { useState } from 'react';
import { Post } from './Post';
import { Comments } from './Comments';
export function Container() {
    const [showComments , setShowComments] = useState(false);
    const [selectedPost , setSelectedPost] = useState(null);
    function openComments(post){
        setSelectedPost(post);
        setShowComments(true);
    }
    function closeComments(){
        setShowComments(false);
        setSelectedPost(null);
    }
    return (
            <div className="container">
                <main className="main-section">
                    <div className="story-section">
                        <Story story={story} />
                    </div>
                    <div className="post-grid js-post-grid">
                        {
                            posts.map((post)=>(
                                <Post key={post.id} post = {post} onCommentClick = {()=>openComments(post)} />
                            ))
                        }
                    </div>
                </main>
                {
                            showComments && (
                                <Comments post={selectedPost} onClose = {closeComments} />
                            )
                        }
            </div>
    )
}