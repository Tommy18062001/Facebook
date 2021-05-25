import React, { useState } from 'react';
import Fb from './img/fb.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function HeaderSearch() {
    const [searchState, setSearchState] = useState(true)

    const inputClick = () => {setSearchState(false)}
    const arrowClick = () => {setSearchState(true)}

    return (
        <div className="header_search">
            {searchState ? (<img src={Fb} alt="facebook logo"/>) : 
            (<div onClick={arrowClick} className="option_btn"> <ArrowBackIcon/> </div>)}
            
            <input type="search" placeholder= "Rechercher sur Facebook" onClick={inputClick}/>

        </div>
    )
}

export default HeaderSearch
