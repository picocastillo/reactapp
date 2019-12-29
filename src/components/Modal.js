import React from 'react';

const comment = (email,name,body,idx) => {
  return (
    <div key={idx}>
      <div  className="border border-primary">
        <p>Nombre: <strong>{name}</strong></p>
        <p>email: <strong>{email}</strong></p>
        <p> Comentario: </p> <i> {body}</i>
      </div>
      <br/>
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Comentarios</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {props.comments.map((item,idx) => {
            return  comment(item.email,item.name,item.body,idx)
            })}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;
