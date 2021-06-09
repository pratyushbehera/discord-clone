import React from 'react'
import './SidebarHeader.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function SidebarHeader() {
    return (
        <div className="sidebar__header">
            <h3>Server Name</h3>
            <ExpandMoreIcon />
        </div>
    )
}

export default SidebarHeader;
