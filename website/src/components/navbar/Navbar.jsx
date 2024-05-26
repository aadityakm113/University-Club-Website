import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar_container'>
      <a href="/">Clubs</a>
      <a href="/events">Events</a>
      <a href="/guidelines">Guidelines</a>
      <a href='/log-in'>Sign in </a>

    </div>
  )
}

export default Navbar