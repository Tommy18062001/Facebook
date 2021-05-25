import React from 'react';

function Messages({pic, text, description, time}) {
    return (
        <div className="notifications">
            <img src={pic} alt="user_online" className="pic"/>
            <p>
                {text} <span>{description}</span> 
                <br/>
                <b>Il y a {time}</b>
            </p>
            
        </div>
    )
}

export default Messages
