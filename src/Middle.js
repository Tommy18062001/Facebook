import React, { Component } from 'react';
import "./css/Middle.css";

import Story from './components/Story';
import aina from './components/story/aina.jpg';
import face_co from './components/story/face_co.png';
import jenny from './components/story/jenny.jpg';
import note from './components/story/note.jpg';
import Tommy from './components/story/Tommy.jpg';
import tuition from './components/story/tuition.PNG';
import quote from './components/story/quote.jpg';
import post from './components/img/post.jpg';
import post1 from './components/img/post1.jpg';
import post2 from './components/img/post2.jpg';
import post3 from './components/img/post3.jpg';
import post4 from './components/img/post4.png';
import post5 from './components/img/post5.png';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import WritePost from './components/WritePost';
import ButtonPost from './components/ButtonPost';
import Post from './components/Post';

import me from './components/img/me.jpg';

import video from "./components/video/test.mkv";
class Middle extends Component {
    myStyle = {
        position: "absolute",
        right:"-10px",
        top: "40%",
        fontSize: "30px",
        color: "white",
        background: "#2a2d31",
        borderRadius: "50%",
        padding: "10px",
        zIndex: "10",
        cursor:"pointer"
    }

    state = {
        posts: [
            {username: 'Tommy Sylver', picture: me, description:"Home sweet home", postPic: post3, video: false},
            {username: 'Jennifer Sylviane', picture: jenny, description: "Me and my mom", postPic: post, video: false},
            {username: 'Johan Tony', picture: Tommy, description: "My litte cousine", postPic: post1, video: false},
            {username: 'Arnold Ratsimbazafy', picture: tuition, description: "One day, i'll visit Europe", postPic: post2, video: false},
            {username: 'BYU pathway', picture: quote, description: "Now We are living in a world of trials and disappointment. We want to encourage you to stay on the course.", postPic: quote, video: false},
            {username: 'Aina Naval', picture: aina, description: "i am looking for a clan. I am active. Please drop a comment if you are interested in inviting me", postPic: post4, video: false},
            {username: 'Brooklyn Stephen', picture: face_co, description: "\"Je voudrais que ca dure longtemps...\"  @ Amir ", postPic: post5, video: false},
            {username: 'Margaret Bennett', picture: note, description: "I love this song so much", postPic: video, video: true},
        ]
    }

    render() {
        return (
            <div className="middle_side" >
                {/* story */}
                <div className="story">
                    <div className="add_story">
                        <img className="user_story" src={me} alt="story"/>
                        <p>Créer une story</p>
                    </div>

                    <Story username="Tommy Sylver" userPic={me} storyPic={Tommy} />
                    <Story username="Jenny Sylvianne" userPic={jenny} storyPic={aina} />
                    <Story username="Barry Allen" userPic={face_co} storyPic={tuition} />
                    <Story username="Tommy Sylver" userPic={note} storyPic={quote} />

                    <ArrowForwardIcon style={this.myStyle} />
                </div>

                {/* post option */}
                <div className="post_option">
                    <WritePost />
                    <div className="post_features">
                        <ButtonPost pic={<VideocamIcon style={{ color:"rgba(236, 72, 72, 0.979)"}}/>} text="Vidéo en direct" withIcon={true}/>
                        <ButtonPost pic={<PhotoLibraryIcon style={{ color:"rgba(57, 187, 96, 0.979)"}}/>} text="Photo/Video" withIcon={true}/>
                        <ButtonPost pic={<InsertEmoticonIcon style={{ color:"rgb(223, 223, 49)"}}/>} text="Humeur/Activité" withIcon={true}/>
                    </div>
                </div>

                {/* post */}
                <div className="post">
                {
                    this.state.posts.map(post => {
                        return(
                            <Post userPic={post.picture} postPic={post.postPic} userName={post.username} description={post.description} videoOn={post.video} />
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default Middle
