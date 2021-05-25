import React from 'react'

function ButtonPost({ pic, text, withIcon }) {
    return (
        <div className="button_post">
            {withIcon ? (<i className="pic" >{pic}</i>) : (<img className="pic" src={pic} alt="option"/>) }
            <p>{text}</p>
        </div>
    )
}

export default ButtonPost
