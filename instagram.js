import { posts,story } from "./data/posts-data.js";
let instagramHTML = ``;
let storyHTML = ``;
story.forEach((sto)=>
{
    storyHTML +=
    `<div class="person-story">
                    <div class="story-profile">
                        <img src=${sto.profile_src}>
                    </div>
                    <div class="person-name">
                        ${sto.id}
                    </div>
    </div>`
})
document.querySelector(".story-section").innerHTML = storyHTML;
posts.forEach((post)=>
{ 
    instagramHTML +=
    `<div class="post-preview">
                    <div class="profile-details">
                        <div class="profile-div">
                            <div class="profile-image">
                                <img src=${post.profile_src}>
                                <div class="influencer-name">
                                    <b>${post.id}</b>
                                    <svg aria-label="Verified" class="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg>
                                </div>
                                <div class="post-time">
                                    <span class="x1lliihq x1plvlek xryxfnj x1n2onr6 xyejjpt x15dsfln x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x1roi4f4" dir="auto" style="--x---base-line-clamp-line-height: 18px; --x-lineHeight: 18px;">•</span> ${post.time_posted}
                                </div>
                            </div>
                        </div>
                        <div class="follow-section">
                            <div class="fol-button">
                                <button class="follow-button"><b class="follow">Follow</b>
                                <b class="following">Following</b>
                                </button>
                            </div>
                            <div>
                                <svg aria-label="More Options" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>More Options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                            </div>
                        </div>
                    </div>
                    <div class="post">
                        <img src=${post.post_src}>
                    </div>
                    <div class="interactive-section">
                        <div class="sharing">
                            <div class="like">
                                <button class="like-button"><svg  class ="unlike" aria-label="Like" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                <svg aria-label="Unlike" class="liked" fill="currentColor" height="24" role="img" viewBox="0 0 48 48" width="24"><title>Unlike</title><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                </button>
                                <div class="likes-count">
                                ${post.likes_count}k
                                </div>
                            </div>
                            <button class="comments" data-id ="${post.profile_id}">
                                <svg aria-label="Comment" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                <div class="comments-count">
                                ${post.comments_count}
                                </div>
                            </button>
                            <button clas="share">
                                <svg aria-label="Share" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share</title><path d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7.488" x2="15.515" y1="12.208" y2="7.641"></line></svg>
                            </button>
                        </div>
                        <button class="save">
                            <svg aria-label="Save" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                        </button>
                        </div>
                    <div class="post-details">
                        <p><b>${post.id}</b> <svg aria-label="Verified" class="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg> ${post.post_descip}</p>
                    </div>
                </div>`    
});
document.querySelector(".js-post-grid").innerHTML = instagramHTML;
function renderComment(id)
{
    let matchingPost = ``;
    posts.forEach((post)=>{
        if(id === post.profile_id)
        {
            matchingPost = post;
        }
    })
    console.log(matchingPost);
    document.querySelector(".comments-dialog").innerHTML = `
    <div class="dialog-box">
            <button class="close-button"><svg aria-label="Close" class="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Close</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg></button>
            <div class="dialog-post">
                <img src="${matchingPost.post_src}">
            </div>
            <div class="real-comments">
                <div class="profile-comments">
                    <div class="comments-part1">
                        <div class="comments-img"><img src="${matchingPost.profile_src}"></div>
                        <div class="comments-profile-name"><b>${matchingPost.id}</b></div>
                        <span class="x1lliihq x1plvlek xryxfnj x1n2onr6 xyejjpt x15dsfln x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x5n08af" dir="auto" style="--x---base-line-clamp-line-height: 18px; --x-lineHeight: 18px;">•</span>
                        <button>Follow</button>
                    </div>
                    <div class="comments-part2">
                        <svg aria-label="More Options" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>More Options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                    </div>
                </div>
                <div class="comments-list">
                    <div class="authors-descrip">
                        <div class="authors-descrip-part1">
                            <div class="authors-descrip-pic">
                                <img src="${matchingPost.profile_src}">
                            </div>
                            <div>
                                <span>
                                <b>${matchingPost.id}</b> ${matchingPost.post_descip}
                            </span>
                            <div class="authors-descrip-post-time">
                            ${matchingPost.time_posted}
                            </div>
                            </div>
                        </div>
                    </div>
                    <ul class="comments-real-list">
                        <li>
                            <div class="authors-descrip">
                                <div class="authors-descrip-part1">
                                    <div class="authors-descrip-pic">
                                        <img src="profiles/onepiece.jpg">
                                    </div>
                                    <div>
                                        <span>
                                        <b>onepeice</b> Being average is comfortable. Being obsessed is what changes everything. 🏁🔥
                                        I wasn’t born to fit in — I was born to dominate. 🏆⚡
                                        </span>
                                        <div class="reviwers-interaction">
                                            <span>
                                                1 d
                                            </span>
                                            <span>
                                                25,345 likes
                                            </span>
                                            <span>
                                                Reply
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <svg aria-label="Like" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="comments-interactive">
                    <div class="comments-interactive-buttons">
                        <div class="comments-interactive-buttons-part1">
                            <button><svg aria-label="Like" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg></button>
                            <button><svg aria-label="Comment" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></button>
                            <button><svg aria-label="Repost" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Repost</title><path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"></path></svg></button>
                            <button><svg aria-label="Share Post" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><path d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7.488" x2="15.515" y1="12.208" y2="7.641"></line></svg></button>
                        </div>
                        <div class="comments-interactive-buttons-part2">
                            <button><svg aria-label="Save" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></button>
                        </div>
                    </div>
                    <div class="comments-like-count">
                        <b>${matchingPost.likes_count}k likes</b>
                    </div>
                    <div class="post-time">
                        ${matchingPost.time_posted}
                    </div>
                    <div class="comments-post">
                        <div class="comments-post-part1">
                            <svg aria-label="Emoji" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Emoji</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                            <div>Add a comment....</div>
                        </div>
                        <div class="comments-post-part2">
                           <button>Post</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    const close = document.querySelector(".close-button");
    close.addEventListener("click",()=>{
    dialog.classList.remove("show");
});

    let html = ``;
for(let i=0;i<10;i++)
{
     html += `
        <li>
            <div class="authors-descrip">
                <div class="authors-descrip-part1">
                    <div class="authors-descrip-pic">
                        <img src="profiles/onepiece.jpg">
                    </div>
                    <div>
                        <span>
                        <b>onepeice</b> Being average is comfortable. Being obsessed is what changes everything. 🏁🔥
                        I wasn’t born to fit in — I was born to dominate. 🏆⚡
                        </span>
                        <div class="reviwers-interaction">
                            <span>
                                1 d
                            </span>
                            <span>
                                25,345 likes
                            </span>
                            <span>
                                Reply
                            </span>
                        </div>
                    </div>
                    <div>
                        <svg aria-label="Like" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                    </div>
                </div>
            </div>
        </li>`
}
document.querySelector(".comments-real-list").innerHTML = html;
}
document.querySelectorAll(".like-button").forEach((like)=>{like.addEventListener("click",()=>{
    like.classList.toggle("liked");
});
})
document.querySelectorAll(".follow-button").forEach((follow)=>{follow.addEventListener("click",()=>{
    follow.classList.toggle('following');
});
})
const dialog = document.querySelector(".comments-dialog")

document.querySelectorAll(".comments").forEach((button)=>{
    button.addEventListener("click",()=>{
    const id = button.dataset.id;
    renderComment(id);
    dialog.classList.add("show");
});
})

