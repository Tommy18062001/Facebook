import React from 'react';

function Story({ username, userPic, storyPic }) {
    return (
        <div className="story_item">
            <img className="story_picture" src={storyPic} alt="story"/>
            <img className="user_picture" src={userPic} alt="story"/>
            <p>{username}</p>
        </div>
    )
}

export default Story
