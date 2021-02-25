import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {useStateValue} from "./StateProvider";

function SideBar() {
    const [{user},disptach]=useStateValue();
    return (
        <div className="sidebar">
        <SidebarRow src={user.photoURL}
         title={user.displayName}/>
        <SidebarRow Icon={LocalHospitalIcon} title="COVID19 Information centre"/>
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
        <SidebarRow Icon={PeopleIcon} title="Friends"/>
        <SidebarRow Icon={ChatIcon} title="Messengers"/>
        <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
        <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
        <SidebarRow Icon={ExpandMoreIcon} title="Marketplace"/>   

            
        </div>
    )
}

export default SideBar
