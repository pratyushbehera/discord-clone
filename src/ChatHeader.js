import React from 'react';
import './ChatHeader.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

function ChatHeader(props) {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <MenuIcon onClick={props.openMenu}/>
                <h3>
                    <p className="chatHeader__hash">#</p>
                    {props.channelName}
                </h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsIcon />
                <EditLocationIcon />
                <PeopleAltIcon />
                <div className="chatHeader__search">
                    <input type="text" placeholder="Search"/>
                    <SearchIcon />
                </div>
                <HelpIcon />
            </div>
        </div>
    )
}

export default ChatHeader
