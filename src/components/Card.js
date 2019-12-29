import React from 'react';
/*{!props.open ? 'CERRADO' : 'ABIERTO'}  L17*/
function Card(props) {

  return(
    <div  className="col-md-12 col-lg-3">
      <div className="card">
        <div className="card-header">
          <p>{props.title}</p>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{props.body}</p>
            <footer className="blockquote-footer">Escrito por<cite title="Source Title">{props.name}</cite></footer>
          </blockquote>
        </div>

        <button onClick={props.click} data-id={props.id} data-idx={props.idx} data-toggle="modal" data-target="#exampleModal" className="btn btn-primary botton">Ver comentarios</button>
      </div>
      <br/>
    </div>
  )
}

export default Card;
