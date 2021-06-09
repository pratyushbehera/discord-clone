import React, { useState, useEffect } from 'react';
import './SidebarChannels.css';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from './features/appSlice';

function SidebarChannels(props) {
    const dispatch = useDispatch();
    const selectChannel = () => {
        dispatch(setChannelInfo({
            channelId: props.id,
            channelName: props.name
        }));
        if(props.onClose)
        props.onClose();
    }
    return (
        <div className="sidebarChannels" onClick={selectChannel}>
            <h4>
                <span className="sidebarChannel__hash">#</span>
                {props.name}
            </h4>
        </div>
    );
}

export default SidebarChannels
