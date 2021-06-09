import { Button } from '@material-ui/core'
import React from 'react'
import logo from './img/discord.png'
import './Login.css'
import { auth, provider } from './firebase';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(err=> console.log(err.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo} alt="Discord logo" />
            </div>

            <Button className="login__btn" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
