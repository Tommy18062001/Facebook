import React, { Component } from 'react';
import './css/Right.css';
import Invitation from './components/Invitation';
import User from './components/User';

import jenny from './components/story/jenny.jpg';
import me from './components/img/me.jpg';
import aina from './components/story/aina.jpg';
import face_co from './components/story/face_co.png';
import note from './components/story/note.jpg';
import Tommy from './components/story/Tommy.jpg';
import tuition from './components/story/tuition.PNG';
import quote from './components/story/quote.jpg';


class Right extends Component {

    state = {
        users: [
            {name: 'Tommy Sylver', picture: me},
            {name: 'Jennifer Sylviane', picture: jenny},
            {name: 'Johan Tony', picture: Tommy},
            {name: 'Arnold Ratsimbazafy', picture: tuition},
            {name: 'BYU pathway', picture: quote},
            {name: 'Aina Naval', picture: aina},
            {name: 'Brooklyn Stephen', picture: face_co},
            {name: 'Joel Bennett', picture: note},
        ]
    }

    render() {
        return (
            <div className="right_side">
               <div className="invitation">
                    <p>Invitations</p>
                    <Invitation userPic={jenny} username="Jennifer Sylvianne"/>  
                </div> 

                <div className="contacts">
                    <div className="contact_header">
                        <p>Contacts</p>

                        {/* the three icon */}
                    </div>

                    {/* who are online */}
                    {
                        this.state.users.map(user => {
                            return(
                                <User userPic={user.picture} username={user.name} />
                            )
                        })
                    }
                </div>

                {/* chat_box */}


            </div>
        )
    }
}

export default Right
