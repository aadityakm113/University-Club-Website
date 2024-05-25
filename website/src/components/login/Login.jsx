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
                <h4>Welcome to the official events</h4>
                <h4>page of GITAM UNIVERSITY</h4>
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