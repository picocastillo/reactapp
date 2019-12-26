import React from 'react';
// import {Link } from 'react-router-dom'
import Menu from './Menu';




function Header(props) {
  return(
    <nav className="navbar navbar-dark bg-primary">
      <p>César Elias Castillo</p>
      <Menu/>
    </nav>
  )
}

export default Header;
