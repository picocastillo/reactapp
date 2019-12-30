import React from 'react';



function SignUp(props) {
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
          <div className="form-group">
            <label >Repita Contraseña</label>
            <input type="password" onChange={props.password} className="form-control"  placeholder="Repita Contraseña" />
          </div>
          <button type="submit" onClick={props.click} className="btn btn-primary">Registrarme</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
