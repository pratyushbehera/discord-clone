import React, { useState, useEffect } from 'react'
import './Chat.css';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import db from './firebase';
import firebase from 'firebase';

function Chat(props) {
    const user = useSelector(selectUser);

    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);


    const [input, setInput] = useState("");
    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const [messages, setMessages] = useState([]);

    const sendMessage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        db.collection("channels")
            .doc(channelId)
            .collection("message")
            .add({
                message: input,
                user: user,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        setInput("");
    }

    useEffect(() => {
        if (channelId) {
            db.collection("channels")
                .doc(channelId)
                .collection("message")
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    let msg = snapshot.docs.map((doc) => {
                        return {
                            message: doc.data().message,
                            user: doc.data().user,
                            timestamp: doc.data().timestamp
                        }
                    });
                    setMessages(msg);
                });
        }
    }, [channelId]);

    
    return (
        <div className="chat">
            <ChatHeader channelName={channelName} openMenu={props.openMenu} />
            <div className="chat__messages">
                {
                    messages.map(message => {
                        return message.timestamp && <ChatMessage key={message.timestamp.seconds} user={message.user} time={message.timestamp} message={message.message} />
                    })
                }
            </div>

            <ChatInput input={input} handleInput={handleInput} channelId={channelId} channelName={channelName} send={sendMessage} />
        </div>
    )
}

export default Chat;
