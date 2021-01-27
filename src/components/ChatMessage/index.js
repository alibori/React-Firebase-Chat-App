import React from 'react'
import { auth } from '../../services/settings'

import './styles.css'

export default function ChatMessage(props){
    const {text, uid, photoURL, createdAt} = props.message
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'
    const date = createdAt.toDate()
    const dateShow = date.toLocaleString()

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} alt="profile" />
            <p>
                {text}
                <br />
                <span className="date">Sent on {dateShow}</span>
            </p>
            <div className="clearfix"></div>
        </div>
    )
}
