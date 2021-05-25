import React from 'react';
import me from './img/me.jpg'

function WritePost() {
    return (
        <div className="write_post">
            <img src={me} alt="me"/>
            <button>Que voulez vous dire, Tommy?</button>
        </div>
    )
}

export default WritePost
