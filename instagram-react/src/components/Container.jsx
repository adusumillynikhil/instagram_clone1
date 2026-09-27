import { posts, story } from '../data/posts-data';
import { Story } from './Story';
import './Story.css';
import { Post } from './Post';
export function Container() {
    return (
            <div className="container">
                <main className="main-section">
                    <div className="story-section">
                        <Story story={story} />
                    </div>
                    <div className="post-grid js-post-grid">
                        <Post posts={posts} />
                    </div>
                </main>
            </div>
    )
}