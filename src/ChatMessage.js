import React from 'react';
import './ChatMessage.css';
import Avatar from '@material-ui/core/Avatar';

function ChatMessage(props) {
    return (

        <div className="message">
            <Avatar src={props.user.photo}/>
            <div className="message__info">
                <h4>
                    {props.user.displayName}
                        <span className="message__timestamp">{new Date(props.time.seconds  * 1000).toISOString()}</span>
                </h4>
                <p>{props.message}</p>
            </div>
        </div>

    )
}

export default ChatMessage
