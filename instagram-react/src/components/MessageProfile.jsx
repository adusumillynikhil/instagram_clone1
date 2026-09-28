import './Message.css';
export function Messageprofile({ chat_messages, selectedChat }) {
    const chat = chat_messages[selectedChat];
    return (
        <>
            <img src={`images/profiles/${chat.profile_name}`} />
            <span><b>{chat.username}</b></span>
        </>
    )
}