import './PreviewPage.css';
import { useState } from 'react';
export function PreviewPage({ file , handleNewPost , setNewPost}) {
    const [ caption , setCaption ] = useState('');
    function createPost()
    {
        const newPost = {
        id: "nikiru._.san",
        profile_id: crypto.randomUUID(),
        time_posted: "now",
        profile_src: "/images/profiles/profile.jpg",
        post_src: URL.createObjectURL(file),
        likes_count: 0,
        comments_count: 0,
        post_descip: caption,
        comments: []
    };
    handleNewPost(newPost);
    setNewPost(false);
    }
    return (
        <div className="newPost-container">
            <img className="post-image" src={URL.createObjectURL(file)}/>

                <div className="newpost-details">
                    <div className="new-post-profile">
                        <img src="images/profiles/profile.jpg" />
                            <b>nikiru._.san</b>
                    </div>
                    <div className="new-post-caption">
                        <textarea
                            className="caption-input"
                            placeholder="Write a caption..."
                            value = {caption}
                            onChange={(e)=>setCaption(e.target.value)}
                        />
                    </div>

                    <button onClick={createPost} >Share</button>
                </div>
        </div>
    )
}