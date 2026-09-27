import './Message.css';
export function MessageNotes({ message_notes }) {
    return (
        <>
            {
                message_notes.map((note) => {
                    return (
                        <div className="message-profile" key={note.id}>
                            <img src={note.id_src}/>
                            <span>{note.id}</span>
                        </div>
                    )
                })
            }
        </>
    )
}