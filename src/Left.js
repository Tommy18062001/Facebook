import './css/Left.css';
import React, { Component } from 'react';
import me from './components/img/me.jpg';
import amis from './components/img/amis.png';
import covid from './components/img/covid.png';
import flag from './components/img/flag.png';
import messenger from './components/img/messenger.png';
import group from './components/img/group.png';

import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';


class Left extends Component {
    render() {
        return (
            <div className="left_side">
                <div className="left_side_up"> 
                    <div class="option_item">
                        <img src={me} alt="me"/>
                        <p>Tommy Sylver</p>
                    </div>

                    <div class="option_item">
                        <img src={covid} alt="me"/>
                        <p>COVID-19 - Centre d'information</p>
                    </div>

                    <div class="option_item">
                        <img src={flag} alt="me"/>
                        <p>Pages</p>
                    </div>

                    <div class="option_item">
                        <img src={amis} alt="me"/>
                        <p>Amis</p>
                    </div>

                    <div class="option_item">
                        <img src={messenger} alt="me"/>
                        <p>Messenger</p>
                    </div>

                    <div class="option_item">
                        <img src={group} alt="me"/>
                        <p>Groupes</p>
                    </div>

                    <div class="option_item">
                        <i><ArrowDropDownCircleIcon style={{ color:"white" }} /></i>
                        <p>Voir Plus</p>
                    </div>
                </div>

                <div className="left_side_down">
                    <p>Vos Raccourcis</p>
                    <div class="option_item">
                        <img src={group} alt="me"/>
                        <p>Html Css Javascript</p>
                    </div>

                    <div class="option_item">
                        <img src={group} alt="me"/>
                        <p>BYU-idaho</p>
                    </div>

                    <div class="option_item">
                        <img src={group} alt="me"/>
                        <p>Django Python</p>
                    </div>
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
        )
    }
}

export default Left
