/* eslint-disable no-unused-vars */
import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import {auth,provider} from "./firebase"
import {actionTypes} from "./Reducer"
import {useStateValue} from "./StateProvider"

function Login() {
    const [state, dispatch]=useStateValue();  //powerful hooks
    const signIn=()=>{
            auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER, 
                    user: result.user,
                })
                
            })
            .catch((error)=>alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
            <img src= "https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt=""/>
            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
            <Button className="button" type="submit" onClick={signIn}> 
            Sign In
            </Button>
            </div>
            
        </div>
    )
}

export default Login
