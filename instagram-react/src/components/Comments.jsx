import './Comments.css';
import { useState } from 'react';
export function Comments({ post, onClose ,handleComment}) {
    const [ message , setMessage] = useState('');
    function sendComment()
    {
        if (!message.trim()) return;
        const comments = {
                        id: Date.now(),
                        username: 'nikiru._.san',
                        img_src: "images/icons/profile.jpg",
                        text: message,
                        likes: 0,
                        time_posted: "1 m"
                    };
        setMessage('');
        handleComment(post.post_id , comments);
    }
    return (
        <div className='comments-dialog'>
            <div className="dialog-box">
                <button className="close-button" onClick={onClose}><svg aria-label="Close" className="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Close</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg></button>
                <div className="dialog-post">
                    <img src={post.post_src} />
                </div>
                <div className="real-comments">
                    <div className="profile-comments">
                        <div className="comments-part1">
                            <div className="comments-img"><img src={post.profile_src} /></div>
                            <div className="comments-profile-name"><b>{post.id}</b></div>
                            <span>•</span>
                            <button>Follow</button>
                        </div>
                        <div className="comments-part2">
                            <svg aria-label="More Options" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>More Options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                        </div>
                    </div>
                    <div className="comments-list">
                        <div className="authors-descrip">
                            <div className="authors-descrip-part1">
                                <div className="authors-descrip-pic">
                                    <img src={post.profile_src} />
                                </div>
                                <div>
                                    <span>
                                        <b>{post.id}</b> {post.post_descip}
                                    </span>
                                    <div className="authors-descrip-post-time">
                                        {post.time_posted}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="comments-real-list">
                            {
                                post.comments.map((comment) => (
                                    <li key={comment.id}>
                                        <div className="authors-descrip">
                                            <div className="authors-descrip-part1">
                                                <div className="authors-descrip-pic">
                                                    <img src={comment.img_src} />
                                                </div>
                                                <div className='authors-comment-details'>
                                                    <span>
                                                        <b>{comment.username}</b> {comment.text}
                                                    </span>
                                                    <div className="reviwers-interaction">
                                                        <span>
                                                            {comment.time_posted}
                                                        </span>
                                                        <span className='comments-likes-interact'>
                                                            {comment.likes}
                                                        </span>
                                                        <span>
                                                            Reply
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <svg aria-label="Like" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="comments-interactive">
                        <div className="comments-interactive-buttons">
                            <div className="comments-interactive-buttons-part1">
                                <button><svg aria-label="Like" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg></button>
                                <button><svg aria-label="Comment" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></button>
                                <button><svg aria-label="Repost" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Repost</title><path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"></path></svg></button>
                                <button><svg aria-label="Share Post" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><path d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7.488" x2="15.515" y1="12.208" y2="7.641"></line></svg></button>
                            </div>
                            <div className="comments-interactive-buttons-part2">
                                <button><svg aria-label="Save" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></button>
                            </div>
                        </div>
                        <div className="comments-like-count">
                            <b>{post.likes_count} likes</b>
                        </div>
                        <div className="post-time">
                            {post.time_posted}
                        </div>
                        <div className="comments-post">
                            <div className="comments-post-part1">
                                <svg aria-label="Emoji" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Emoji</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                <input placeholder='Add a comment....' value={message} onChange={(e)=>setMessage(e.target.value)}></input>
                            </div>
                            <div className="comments-post-part2">
                                <button onClick={sendComment}>Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}