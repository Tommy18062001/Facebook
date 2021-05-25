import React from 'react'

function SubOption({pic, text, description}) {
    return (
        <div className="sub-option">
            <i className="pic">{pic}</i>
            <p>{text} <br/> <span>{description}</span> </p>
        </div>
    )
}

export default SubOption;
