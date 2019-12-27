import React from 'react';
import {Link} from 'react-router-dom';

function Table(props) {
  const putRows = () => (
    props.users.map((user,key)=>(
      <tr key={user.id}>
        <td>
        {user.name}
        </td>
        <td>
        {user.email}
        </td>
        <td>
        {user.website}
        </td>
        <td>
        <Link to={`/publications/${key}`} >
          <div className="eye-solid icon"></div>
        </Link>
        </td>
      </tr>

    ))
  )
  return(
    <table className="table">
      <thead>
        <tr>
          <th>
            Nombre
          </th>
          <th>
            Correo
          </th>
          <th>
            Enlase
          </th>
        </tr>
      </thead>
      <tbody>
        {putRows()}
      </tbody>
    </table>
  )
}

export default Table;
