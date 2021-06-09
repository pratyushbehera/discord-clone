import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import './SidebarChannelList.css';
import SidebarChannels from './SidebarChannels';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'
import db, { auth } from './firebase';

function SidebarChannelList(props) {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot(snapShot => (
            setChannels(snapShot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data()
            })))
        ))
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name");
        if (channelName) {
            db.collection('channels').add({
                channelName
            })
        }
    }
    return (
        <div className="sidebar__channels">
            <div className="sidebar__channelsHeader">
                <div className="sidebar__channelsHeaderType">
                    <ExpandMoreIcon />
                    <h3>Text Channels</h3>
                </div>
                <div className="sidebar__addchannel" title="click here to add channel">
                    <AddIcon onClick={handleAddChannel}  />
                </div>
            </div>

            <div className="sidebar__channelList">
                {channels.map(({ id, channel }) => {
                    return (
                        <SidebarChannels key={id} name={channel.channelName} id={id} onClose={props.onClose}/>
                    )
                })}


            </div>
        </div>
    )
}

export default SidebarChannelList
