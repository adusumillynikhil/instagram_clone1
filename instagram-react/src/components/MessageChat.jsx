import './Message.css';
export function MessageChat({ chat_messages, selectedChat }) {
    const chat = chat_messages[selectedChat];
    return (
        <>
            {
                chat.messages.map((message, index) => {
                    const photo = message.sender === "me" ? "images/icons/profile.jpg" : `images/profiles/${chat.profile_name}`;
                    return (
                        <div className={`message-object ${message.sender}`} key={index}>
                            <div className="message-sent">
                                <img src={photo} />
                            </div>
                            <div className="message-style">
                                <span>{message.text}</span>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}