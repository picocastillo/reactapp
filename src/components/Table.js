import React from 'react';


function Table(props) {
  const putRows = () => (
    props.users.map((user)=>(
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
