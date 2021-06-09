import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './SidebarProfile.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'
import {auth} from './firebase';

function SidebarProfile() {
    const user = useSelector(selectUser);
    return (
        <div className="sidebar__profile">
            <Avatar src={user.photo} onClick={()=>auth.signOut()} title="Click here to log out"/>
            <div className="sidebar__profileInfo">

                <h3>{user.displayName}</h3>
                <p>@{user.uid}</p>
            </div>
        </div>
    )
}

export default SidebarProfile
