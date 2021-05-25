import React from 'react';
import ButtonPost from './ButtonPost'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import Screenshot from "./video/screenshot.png";

function Post({ userPic, postPic, userName, description, videoOn }) {
    return (
        <div className="post_item">
            <div className="post_header">
                <img src={userPic} alt="user"/>
                <p>{userName}</p>
            </div>

            <div className="post_body">
                <p>{description}</p>
                {videoOn ? (<video src={postPic} className="video" poster={Screenshot} preloads controls loop></video>) : (<img src={postPic} alt="user's post"/>) }
            </div>

            <div className="post_footer">
                <ButtonPost pic={<ThumbUpAltIcon/>} text="J'aime" withIcon={true} />
                <ButtonPost pic={<ChatBubbleOutlineIcon/>} text="Commenter" withIcon={true} />
                <ButtonPost pic={<ShareIcon/>} text="Partager" withIcon={true} />
            </div>
        </div>
    )
}

export default Post
