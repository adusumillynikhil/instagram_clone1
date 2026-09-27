import './Message.css';
export function MessagePreview({ message_overview }) {
    return (
        <>
            {
                message_overview.map((message) => {
                    return (
                        <div className="rm-profile" data-id={message.id} key={message.id}>
                            <img src={message.id_src} />
                            <div className="rm-info">
                                <span><b>{message.id}</b></span>
                                <span className="rm-info-1"><b>{message.id} sent an attachment &#183; <span>{message.time}</span></b></span>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}