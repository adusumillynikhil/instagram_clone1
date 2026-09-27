import './Story.css';

export function Story({ story }) {
    return (
        <>
            {story.map((sto) => (
                <div className="person-story" key={sto.id}>
                    <div className="story-profile">
                        <img src={sto.profile_src} />
                    </div>

                    <div className="person-name">
                        {sto.id}
                    </div>
                </div>
            ))}
        </>
    );
}