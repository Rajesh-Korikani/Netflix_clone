import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul id='NavBar'>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/health'>Health</NavLink></li>
     <li><NavLink to="/technology">Technology</NavLink></li>
      <li><NavLink to="/business">Business</NavLink></li>
      <li><NavLink to="/food">Food</NavLink></li>
  <li><NavLink to="/celebrity">Celebrity</NavLink></li>
      

      
    </ul>
  )
}

export default Navbar
