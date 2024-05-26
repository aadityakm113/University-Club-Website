import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className='container'>
        <div className='left' >
            <div className='logo'>
                <img src='./assets/cats-logo.png'/> 
            </div>
            <div className='welcome'>
                <p>Welcome to the official events</p>
                <p>page of GITAM UNIVERSITY</p>
            </div>
        </div>
        <form className='Sign-in'>

        <div className='user'>
        <input type="text" id="username" className='textbox' placeholder="Username"/>
        <input type="password" id="password" className='textbox' placeholder="Password"/>
        <div className='Sign-in'>
        <button id="Sign in" className='button'>Sign in</button>
        
        </div>

        </div>
        </form>
    </div>
  )
}

export default Login