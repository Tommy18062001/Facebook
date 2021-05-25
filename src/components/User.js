import React from 'react'

function User({ userPic, username }) {

    const activate = () => {
        console.log(username)
    }
    return (
        <div className="user" onClick={activate}>
            <img src={userPic} alt="user_online"/>
            <p>{username}</p>
        </div>
    )
}

export default User
