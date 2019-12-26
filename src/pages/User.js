import React from 'react';
import {connect} from 'react-redux';

import * as userActions from '../reducers/userActions';


class User extends React.Component {


  componentDidMount(){
    this.props.getAll();
  }
  putRows = () => (
    this.props.users.map((user)=>(
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

    )
    )
)
  render(){
    return(
      <div >
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
            {this.putRows()}
          </tbody>
        </table>
      </div>
    )
  }
}
const mapToProps = (reducer) => {
  return reducer.userReducers;
}
export default connect(mapToProps, userActions)(User);
