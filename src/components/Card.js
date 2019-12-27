import React from 'react';

function Card(props) {

  return(
    <div key={props.id} className="col-md-3">
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
      </div>
    </div>
  )
}

export default Card;
