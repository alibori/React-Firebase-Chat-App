import React, {useState, useRef} from 'react'
import ChatMessage from '../ChatMessage'
import SignOut from '../SignOut'

import './styles.css'

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import firebase from 'firebase/app'
import {auth, firestore} from '../../services/settings'
import { useCollectionData } from 'react-firebase-hooks/firestore'

export default function ChatRoom(){
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt')
    const [messages] = useCollectionData(query, {idField: 'id'})
    const [formValue, setFormValue] = useState('')
    const [picker, setPicker] = useState(false)
    const anchor = useRef()

    const addEmoji = (emoji) => {
        const input = document.getElementById('text').value
        
        setFormValue(input + emoji.native)
    }

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

            <button onClick={(e) => setPicker(!picker)}>🙂</button>

            <form onSubmit={sendMessage}>
                {picker ? <Picker style={{position: 'absolute', top: '19%', left: '0%', width: '100%'}} native={true} theme="dark" title='Pick your emoji…' emoji='point_up' onSelect={addEmoji} /> : ''}
                <input id="text" type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <button>🚀</button>
            </form>
        </>
    )
}
