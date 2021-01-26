import React from 'react'
import './App.css';

import SignIn from './components/SignIn'
import ChatRoom from './components/ChatRoom'

import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './services/settings'

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App-content">
      <header>
        <h1>⚛️React & 🔥Firebase Chat💬</h1>
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
