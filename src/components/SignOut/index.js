import React from 'react'

import {auth} from '../../services/settings'

export default function SignOut(){
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}
