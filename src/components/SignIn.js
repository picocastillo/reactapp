import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import {Link} from 'react-router-dom';



function Signin(props) {
  const firebase = useFirebase()
  const auth = useSelector(state => state.firebase.auth)

  function loginWithGoogle(e) {
    e.preventDefault()
    return firebase.login({ provider: 'google', type: 'popup' })
  }
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
          <div className="row">
            <button type="submit" onClick={props.click} className="btn btn-primary">Ingresar</button> &nbsp; &nbsp;
            <button onClick={loginWithGoogle} className="btn btn-primary">Ingresar Con Google</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin;
