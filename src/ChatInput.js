import React from 'react';
import './ChatInput.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';

function ChatInput(props) {
    return (
        <div className="chat__input">
            <AddCircleIcon/>
            <form>
                <input disabled={!props.channelId} value={props.input} onChange={props.handleInput} placeholder={`Message #${props.channelName || ""}`} />
                <button className="chatinput__submit" type="submit" onClick={(e)=>props.send(e)}>Send Message</button>
            </form>
        </div>
    )
}

export default ChatInput
