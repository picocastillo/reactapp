import React from 'react';

function Card(props) {

  return(
    <div  className="col-md-3">
      <div className="card">
        <div className="card-header">
          <h6>{props.title}</h6>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{props.body}</p>
            <footer className="blockquote-footer">Escrito por<cite title="Source Title">{props.name}</cite></footer>
          </blockquote>
        </div>
        <button onClick={props.click} data-id={props.id} className="btn btn-primary botton">Ver comentarios</button>
      </div>
    </div>
  )
}

export default Card;
