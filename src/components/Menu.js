import React from 'react';
import { Link } from 'react-router-dom'



function Menu(props) {
  return(
    <div id="menu">
      <Link to="/users">Usuarios </Link>
      <Link to="/home"> Home </Link>
      <Link to="/tasks"> Tareas </Link>
    </div>
  )
}

export default Menu;
