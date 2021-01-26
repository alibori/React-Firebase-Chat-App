import React from 'react'
import { auth } from '../../services/settings'

import './styles.css'

export default function ChatMessage(props){
    const {text, uid, photoURL} = props.message
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} alt="profile" />
            <p>{text}</p>
            <div className="clearfix"></div>
        </div>
    )
}
