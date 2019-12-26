import React from 'react';
import {connect} from 'react-redux';

import * as userActions from '../reducers/userActions';
import Spinner from '../components/Spinner'
import Fatal from '../components/Fatal'

class User extends React.Component {


  componentDidMount(){
    this.props.getAll();
  }
  putContent = () => {
    if (this.props.loading){
      return <Spinner/>
    }

    if (this.props.error) {
      return <Fatal message = {this.props.error} />
    }
    return (
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
    )
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
        {this.putContent()}
      </div>
    )
  }
}
const mapToProps = (reducer) => {
  return reducer.userReducers;
}
export default connect(mapToProps, userActions)(User);
