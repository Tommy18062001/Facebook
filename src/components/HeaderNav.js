import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import GroupIcon from '@material-ui/icons/Group';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';

function HeaderNav() {
    const [home, setHome] = useState("active")
    const [video, setVideo] = useState("nav_link")
    const [group, setGroup] = useState("nav_link")
    const [view, setView] = useState("nav_link")

    const homeActive = () => {
        setHome("active")
        setGroup("nav_link")
        setVideo("nav_link")
        setView("nav_link")
    }
    const videoActive = () => {
        setVideo("active")
        setGroup("nav_link")
        setHome("nav_link")
        setView("nav_link")
    }
    const groupActive = () => {
        setGroup("active")
        setHome("nav_link")
        setVideo("nav_link")
        setView("nav_link")
    }
    const viewActive = () => {
        setView("active")
        setGroup("nav_link")
        setVideo("nav_link")
        setHome("nav_link")
    }

    return (
        <div className="header_nav" >
            <div className={home} onClick={homeActive}>   <HomeIcon style={{ fontSize: 30 }}/>         </div>
            <div className={video} onClick={videoActive}> <OndemandVideoIcon style={{ fontSize: 30}}/> </div>
            <div className={group} onClick={groupActive}> <GroupIcon style={{ fontSize: 30}}/>         </div>
            <div className={view} onClick={viewActive}>   <ViewCompactIcon style={{ fontSize: 30 }}/>  </div>
        </div>
    )
}

export default HeaderNav
