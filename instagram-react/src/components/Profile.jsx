import './Profile.css'
export function Profile() {
    return (
        <div className="container">
            <div className="profile-page">
                <div className="profile-details-profile">
                    <img src="images/icons/profile.jpg" />
                    <div className="followers-box">
                        <div className="profile-name">nikiru._.san</div>
                        <div>nikiru</div>
                        <div className="followers-section">
                            <div><b>0</b> posts</div>
                            <div><b>48</b> followers</div>
                            <div><b>59</b> following</div>
                        </div>
                        <div className="bio-section">
                            <div>"MAYBE GOD IS WITH HIM,BUT HE IS NOT GOD"</div>
                        </div>
                    </div>
                </div>
                <div className="profile-button-section">
                    <button>Edit Profile</button>
                    <button>View Archive</button>
                </div>
                <div className="highlights-section">
                    <div className="highlights-section-inner">
                        <svg aria-label="Plus icon" className="x1lliihq x1n2onr6 x10xgr34" fill="currentColor" height="44" role="img" viewBox="0 0 24 24" width="44"><title>Plus icon</title><path d="M21 11h-8V3a1 1 0 1 0-2 0v8H3a1 1 0 1 0 0 2h8v8a1 1 0 1 0 2 0v-8h8a1 1 0 1 0 0-2Z"></path></svg>
                        <div>New</div>
                    </div>
                </div>
            </div>
            <div className="profile-navbar">
                <svg aria-label="Posts" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Posts</title><rect height="6" rx="1" ry="1" width="4.667" x="3" y="1"></rect><rect height="6" rx="1" ry="1" width="4.667" x="16.333" y="1"></rect><rect height="6" rx="1" ry="1" width="4.667" x="9.667" y="1"></rect><rect height="6" rx="1" ry="1" width="4.667" x="3" y="9"></rect><rect height="6" rx="1" ry="1" width="4.667" x="16.333" y="9"></rect><rect height="6" rx="1" ry="1" width="4.667" x="9.667" y="9"></rect><rect height="6" rx="1" ry="1" width="4.667" x="3" y="17"></rect><rect height="6" rx="1" ry="1" width="4.667" x="16.333" y="17"></rect><rect height="6" rx="1" ry="1" width="4.667" x="9.667" y="17"></rect></svg>
                <svg aria-label="Saved" className="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Saved</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                <svg aria-label="Tagged" className="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Tagged</title><path d="M21 7.48a2 2 0 0 0-2-2h-3.046a2.002 2.002 0 0 1-1.506-.683l-1.695-1.939a1 1 0 0 0-1.506 0L9.552 4.797c-.38.434-.93.682-1.506.682H5a2 2 0 0 0-2 2V19l.01.206A2 2 0 0 0 5 21h14a2 2 0 0 0 2-2V7.48ZM23 19a4 4 0 0 1-4 4H5a4 4 0 0 1-3.995-3.794L1 19V7.48a4 4 0 0 1 4-4h3.046l1.696-1.94a3 3 0 0 1 4.516 0l1.696 1.94H19a4 4 0 0 1 4 4V19Z" fill="currentColor"></path><path d="M14.5 10.419a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM12 16.003c3.511 0 6.555 1.99 8.13 4.906a1 1 0 0 1-1.76.95c-1.248-2.31-3.64-3.857-6.37-3.857S6.878 19.55 5.63 21.86a1 1 0 0 1-1.76-.951c1.575-2.915 4.618-4.906 8.13-4.906Z" fill="currentColor"></path></svg>
            </div>
            <hr className="divider" />
            <div className="post-controls">
                <svg aria-label="When you share photos, they will appear on your profile." className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="62" role="img" viewBox="0 0 96 96" width="62"><title>When you share photos, they will appear on your profile.</title><circle cx="48" cy="48" fill="none" r="47" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></circle><ellipse cx="48.002" cy="49.524" fill="none" rx="10.444" ry="10.476" stroke="currentColor" stroke-linejoin="round" stroke-width="2.095"></ellipse><path d="M63.994 69A8.02 8.02 0 0 0 72 60.968V39.456a8.023 8.023 0 0 0-8.01-8.035h-1.749a4.953 4.953 0 0 1-4.591-3.242C56.61 25.696 54.859 25 52.469 25h-8.983c-2.39 0-4.141.695-5.181 3.178a4.954 4.954 0 0 1-4.592 3.242H32.01a8.024 8.024 0 0 0-8.012 8.035v21.512A8.02 8.02 0 0 0 32.007 69Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                <div className="share-photos">Share Photos</div>
                <p>when you share photos , they will appear on your profile</p>
                <p>share your first photo</p>
            </div>
        </div>
    )
}