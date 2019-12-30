import React from 'react';
import { Link } from 'react-router-dom'




function Menu(props) {
  console.log(props)
  return(
    <div id="menu">
      <Link to="/users">Usuarios </Link>
      <Link to="/home"> Home </Link>
      <Link to="/tasks"> Tareas </Link>
      <Link to="/logout"> Salir </Link>
    </div>
  )
}

export default Menu;
