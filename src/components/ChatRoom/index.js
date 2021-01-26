import React, {useState, useRef} from 'react'
import ChatMessage from '../ChatMessage'
import SignOut from '../SignOut'

import './styles.css'

import firebase from 'firebase/app'
import {auth, firestore} from '../../services/settings'
import { useCollectionData } from 'react-firebase-hooks/firestore'

export default function ChatRoom(){
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt')
    const [messages] = useCollectionData(query, {idField: 'id'})
    const [formValue, setFormValue] = useState('')
    const anchor = useRef()

    const sendMessage = async(evt) => {
        evt.preventDefault()
        const {uid, photoURL} = auth.currentUser

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('')
        anchor.current.scrollIntoView({behaviour: 'smooth'})
    }

    return (
        <>
            <SignOut />
            <main>
                {messages && messages.map(mssg => <ChatMessage key={mssg.id} message={mssg} />)}
                <div ref={anchor}></div>
            </main>

            <form onSubmit={sendMessage}>
                <input type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <button>🚀</button>
            </form>
        </>
    )
}
