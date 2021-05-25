import React from 'react'

function Invitation({ userPic, username}) {
    return (
        <div className="invitation_item">
            <p><img src={userPic} alt="user"/> {username}</p>
            <div className="option">
                <button style={{ backgroundColor:"#3672f5" }} >Confirmer</button>
                <button style={{ backgroundColor:"#2a2d31" }} >Supprimer</button>
            </div>
        </div>
    )
}

export default Invitation
