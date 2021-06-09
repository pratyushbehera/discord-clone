import React from 'react'
import './Sidebar.css';
import SidebarHeader from './SidebarHeader';
import SidebarChannelList from './SidebarChannelList';
import SidebarProfile from './SidebarProfile';

function Sidebar(props) {
        return (
        <div className={"sidebar " + (props.open ? "display__flex" : "")}>
            <SidebarHeader />            
            <SidebarChannelList onClose={props.onClose}/> 
            <SidebarProfile />
        </div>
    )
}

export default Sidebar;
