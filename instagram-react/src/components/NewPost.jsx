import './NewPost.css';
import './UploadPage';
import { useState } from 'react';
import { UploadPage } from './UploadPage';
import { PreviewPage } from './PreviewPage';
export function NewPost({handleNewPost,setNewPost}) {
    const [selectedFile , setSelectedFile] = useState(null);
    function handlePost(e)
    {
        setSelectedFile(e.target.files[0]);
    }
        return (
        <div className="modal-overlay">
            <button className="close-button" onClick={()=>{setNewPost(false)}}><svg aria-label="Close" className="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Close</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg></button>
            <div className="modal-content">
                {
                    selectedFile === null
                        ? <UploadPage handlePost={handlePost} />
                        : <PreviewPage
                            file={selectedFile}
                            handleNewPost={handleNewPost}
                            setNewPost={setNewPost}
                        />
                }
            </div>
        </div>
    );
}