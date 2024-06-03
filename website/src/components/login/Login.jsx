import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate('/add')
  }

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
            <div className='line'>
              <p>Manage your events anywhere and</p>
              <p>anytime.</p>
            </div>
        </div>
        <div className='vertical'></div>
        <form className='Sign-in'>

        <div className='user'>
        <input type="text" id="username" className='textbox' placeholder="Email"/>
        <input type="password" id="password" className='textbox' placeholder="Password"/>
        <div className='Sign-in'>
        <button id="Sign in" className='button' onClick={handleSignIn}>Sign in</button>
        
        </div>

        </div>
        </form>
    </div>
  )
}

export default Login