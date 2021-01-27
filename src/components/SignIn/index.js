import React from 'react'

import firebase from 'firebase/app'
import {auth} from '../../services/settings'

import {ReactComponent as GoogleLogo} from '../../google_logo.svg'
import './styles.css'

export default function SignIn(){
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <>
            <button className="btn-login" onClick={signInWithGoogle}><GoogleLogo className="google-logo" />Sign in with Google</button>
        </>
    )
}
