import React from 'react';

function Messages({pic, text, description}) {
    return (
        <div className="messages">
            <img src={pic} alt="user_online" className="pic"/>
            <p>{text}<br/> <span>{description}</span> </p>
        </div>
    )
}

export default Messages
