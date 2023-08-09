import React from 'react'
import "./NavBar.css"



function NavBar() {
  return (
    <div className='nav-bar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
      <div className="list-menu">
        <ul className='lists'>
            <li><a href="">Home</a> </li>
            <li><a href="">TV Sereis</a></li>
            <li><a href="">Movies</a> </li>
            <li><a href="">Recently Added</a></li>
            <li><a href="">My List</a></li>
        </ul>
      </div>
      <img src="https://i.pinimg.com/564x/d7/1d/5c/d71d5cce025b22cea3b3ef9a48f9fd4a.jpg" alt="avatar" />
    </div>
  )
}

export default NavBar
