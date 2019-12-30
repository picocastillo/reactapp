import React from 'react';
import {Link} from 'react-router-dom';




function Signin(props) {
  return(
    <div className="card">
      <div className="card card-header text-center">
      <h4>{props.header}</h4>
      </div>
      <div className="car card-body">
        <form>
          <div className="form-group">
            <label >Correo Electrónico</label>
            <input onChange={props.email} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Ingrese Correo Electrónico" />
          </div>
          <div className="form-group">
            <label >Contraseña</label>
            <input type="password" onChange={props.password} className="form-control"  placeholder="Ingrese Contraseña" />
          </div>
          <Link to="/register">Deseo Registrarme </Link> <br/> <br/> <br/>
          <button type="submit" onClick={props.click} className="btn btn-primary">Ingresar</button>
        </form>
      </div>
    </div>
  )
}

export default Signin;
