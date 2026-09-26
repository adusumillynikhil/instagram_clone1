import { message_overview,message_notes,chat_messages } from "./data/messages-data.js";
let html = '';
message_overview.forEach((message)=>
{
    html += `
        <div class="rm-profile" data-id ="${message.id}">
            <img src="${message.id_src}">
            <div class="rm-info">
                <span><b>${message.id}</b></span>
                <span class="rm-info-1"><b>${message.id} sent an attachment &#183; <span style="color: rgb(168, 168, 168);">${message.time}</span></b></span>
            </div>
        </div>
    `
})
document.querySelector('.real-messages').innerHTML = html;
let notesHTML = ``;
message_notes.forEach((note)=>
{
    notesHTML += `
    <div class="message-profile">
        <img src="${note.id_src}">
        <span>${note.id}</span>
    </div>
    `
})
document.querySelector(".message-profiles").innerHTML = notesHTML;
function messageRender(id)
{
    document.querySelector(".chat-profile").innerHTML= `
    <img src="profiles/${chat_messages[id].profile_name}">
    <span><b>${chat_messages[id].username}</b></span>`;
    let html = ``;
    chat_messages[id].messages.forEach((message)=>
    {
        let photo;
        if(message.sender === "me")
        {
            photo = "profile.jpg";
        }
        else
        {
            photo = chat_messages[id].profile_name;
        }
        html += `
        <div class="message-object ${message.sender}">
            <div class="message-sent">
                <img src="profiles/${photo}">
            </div>
            <div class="message-style">
                <span>${message.text}</span>
            </div>
        </div>`
    })
    document.querySelector(".chat").innerHTML = html;
}
document.querySelectorAll(".rm-profile").forEach((message)=>
{
    message.addEventListener("click",()=>
    {
        const id = message.dataset.id;
        messageRender(id);
    })
})
document.querySelector(".messages-icon").addEventListener("click",()=>
{
    const message = document.querySelector(".messages-section");
    message.classList.add("show");
    const main = document.querySelector(".main-section");
    main.classList.add("hide");
    const sugg = document.querySelector(".suggestions-section");
    sugg.classList.add("hide");
    const float = document.querySelector(".message-utility");
    float.classList.add("hide");

})
document.querySelector(".home-icon").addEventListener("click",()=>
{
    const message = document.querySelector(".messages-section");
    message.classList.remove("show");
    const main = document.querySelector(".main-section");
    main.classList.remove("hide");
    const sugg = document.querySelector(".suggestions-section");
    sugg.classList.remove("hide");
    const float = document.querySelector(".message-utility");
    float.classList.remove("hide");
})
