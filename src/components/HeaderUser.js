import React, {useState} from 'react';
import me from './img/me.jpg';
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SubOption from "./SubOption";
import Messages from "./Messages";
import Notifications from './Notifications';
 

import jenny from './story/jenny.jpg';
import aina from './story/aina.jpg';
import face_co from './story/face_co.png';
import note from './story/note.jpg';
import Tommy from './story/Tommy.jpg';
import tuition from './story/tuition.PNG';
import quote from './story/quote.jpg';
import myself from './img/me.jpg';

function HeaderUser() {

    const messages = [
        {   pic : jenny,
            text: "Jennifer Sylviane",
            description: "Partagez une publications sur le fil d'actualité"
        },
        {   pic : myself,
            text: "Tommy Sylver",
            description: "Partagez un photo ou un message"
        },

        {   pic : aina,
            text: "Aina Naval",
            description: "Discutez en vidéo avec la personnes d..."
        },
        {   pic : face_co,
            text: "Brooklyn Stephen",
            description: "Communiquer et partagez avec vos client..."
        },
        {   pic : note,
            text: "Joel Bennett",
            description: "Faites la promotion de votre entrepri..."
        },
        {   pic : tuition,
            text: "Arnold Ratsimbazafy",
            description: "Trouvez des personnes qui partagent..."
        },
        {   pic : Tommy,
            text: "Johan Tony",
            description: "Rassembler les gens autour d'un évène..."
        },

        {   pic : quote,
            text: "BYU Pathway Worldwide",
            description: "Rassembler les gens autour d'un évènem..."
        },
    ]

    const options = [
        {   pic : <ChatIcon/>,
            text: "Publication",
            description: "Partagez une publications sur le fil d'actualité"
        },
        {   pic : <ChatIcon/>,
            text: "Story",
            description: "Partagez un photo ou un message"
        },

        {   pic : <ChatIcon/>,
            text: "Salon",
            description: "Discutez en vidéo avec la personnes de votre choice, Sur facebook ou en dehors, sans limite de temps"
        },
        {   pic : <ChatIcon/>,
            text: "Pages",
            description: "Communiquer et partagez avec vos clients ou fans"
        },
        {   pic : <ChatIcon/>,
            text: "Publicité",
            description: "Faites la promotion de votre entreprise, votre marque ou votre organisation"
        },
        {   pic : <ChatIcon/>,
            text: "Groupes",
            description: "Trouvez des personnes qui partagent vos centres d'interêt."
        },
        {   pic : <ChatIcon/>,
            text: "Evènement",
            description: "Rassembler les gens autour d'un évènement public ou privé."
        },
    ]

    const profilOptions = [
        {   pic : <ChatIcon/>,
            text: "Raccourcis",
            description: "Decouvrez tout ce que vous pouvez faire sur Facebook"
        },
        {   pic : <ChatIcon/>,
            text: "Paramètres et confidentialité",
            description: ""
        },

        {   pic : <ChatIcon/>,
            text: "Aide et Assistance",
            description: ""
        },
        {   pic : <ChatIcon/>,
            text: "Se Déconnecter",
            description: ""
        } ]

    const [optionState, setOptionState] = useState("hidden");
    const [optionOneState, setOptionOneState] = useState("hidden");
    const [optionTwoState, setOptionTwoState] = useState("hidden");
    const [optionThreeState, setOptionThreeState] = useState("hidden");

    const [colorState, setColorState] = useState("white");
    const [colorOneState, setColorOneState] = useState("white");
    const [colorTwoState, setColorTwoState] = useState("white");
    const [colorThreeState, setColorThreeState] = useState("white");
    

    const activate = () => {
        if (optionState === "hidden") {setOptionState("show")}
        else {setOptionState("hidden")}

        setOptionOneState("hidden")
        setOptionTwoState("hidden")
        setOptionThreeState("hidden")

        if (colorState === "white") {setColorState("#3672f5")}
        else {setColorState("white")}

        setColorOneState("white")
        setColorTwoState("white")
        setColorThreeState("white")
    }

    const activate_1 = () => {
        if (optionOneState === "hidden") {setOptionOneState("show")}
        else {setOptionOneState("hidden")}

        setOptionState("hidden")
        setOptionTwoState("hidden")
        setOptionThreeState("hidden")

        if (colorOneState === "white") {setColorOneState("#3672f5")}
        else {setColorOneState("white")}

        setColorState("white")
        setColorTwoState("white")
        setColorThreeState("white")
    }

    const activate_2 = () => {
        if (optionTwoState === "hidden") {setOptionTwoState("show")}
        else {setOptionTwoState("hidden")}

        setOptionState("hidden")
        setOptionOneState("hidden")
        setOptionThreeState("hidden")

        if (colorTwoState === "white") {setColorTwoState("#3672f5")}
        else {setColorTwoState("white")}

        setColorState("white")
        setColorOneState("white")
        setColorThreeState("white")
    }

    const activate_3 = () => {
        if (optionThreeState === "hidden") {setOptionThreeState("show")}
        else {setOptionThreeState("hidden")}

        setOptionState("hidden")
        setOptionOneState("hidden")
        setOptionTwoState("hidden")

        if (colorThreeState === "white") {setColorThreeState("#3672f5")}
        else {setColorThreeState("white")}

        setColorState("white")
        setColorTwoState("white")
        setColorOneState("white")
    }


    return (
        <div className="header_user" >
            <div className="username">
                <img src={me} alt="user"/>
                <p>Tommy</p>
            </div>

            <div className="option" onClick={activate}> <AddIcon style={{ fontSize: 30, color:colorState }} /></div>
            <div className="option" onClick={activate_1}> <ChatIcon style={{ fontSize: 25, color:colorOneState }} /> </div>
            <div className="option" onClick={activate_2}> <NotificationsIcon style={{ fontSize: 25, color:colorTwoState }} /> </div>
            <div className="option" onClick={activate_3}> <ArrowDropDownIcon style={{ fontSize: 40, color:colorThreeState }} /> </div>

            {/* Creer section */}
            <div className={optionState}>
                    <h2>Créez</h2>
                    {
                        options.map(option => {
                            return(
                            <SubOption pic={option.pic} text={option.text} description={option.description}/>
                            )
                    })
                    } 
            </div>

            {/* Messages section */}
            <div className={optionOneState}>
                    <h2>Messenger</h2> {/* There is still the 4 option that goes here. */}
                   
                   <div className="search_message">
                    <input type="text" placeholder="Rechercher dans Messenger"/>
                   </div>
                    {
                        messages.map(message => {
                            return(
                            <Messages pic={message.pic} text={message.text} description={message.description}/>
                            )
                    })
                    } 
            </div>

            {/* Notifications section */}
            <div className={optionTwoState}>
                    <h2>Notifications</h2>
                    <h4>Nouveau</h4>
                    {
                        messages.map(message => {
                            return(
                            <Notifications pic={message.pic} text={message.text} description={message.description}
                            time="12 minutes"/>
                            )
                    })
                    } 
            </div>

             {/* profil section */}
            <div className={optionThreeState}>
                <div className="profil_button">
                    <img src={myself} alt="user_online" className="pic"/>
                    <p>Tommy Sylver<br/> <span>Voir votre Profil</span> </p>
                </div>

                <div className="avis_button">
                    <i className="pic"><ChatIcon/></i>
                    <p>Donner votre Avis<br/> <span>Aidez-nous à ameliorer la nouvelle version de Facebook</span> </p>
                </div>

                {/* Profil option section */}
                <div className="my_option">
                        {
                            profilOptions.map(option => {
                                return(
                                <SubOption pic={option.pic} text={option.text} description={option.description}/>
                                )
                        })
                        } 
                </div>

                <div className="info">
                    <p> <a href="#">Confidentialité</a> ·
                        <a href="#">Conditions générales</a> ·
                        <a href="#">Publicités</a> ·
                        <a href="#">Choix publicitaires</a> ·
                        <a href="#">Cookies</a> ·
                        <a href="#">Plus</a> · 
                        Facebook © 2021
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderUser
