import React from 'react';
import {connect} from 'react-redux';

import * as userActions from '../reducers/userActions';
import Spinner from '../components/Spinner'
import Fatal from '../components/Fatal'
import Table from '../components/Table'

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
    if (!this.props.users){
      return <p> No hay Usuarios</p>
    }
    return (
      <Table users = {this.props.users} />
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

    ))
  )
  render(){
    return(
      <div >
        <h2> Usuarios</h2> <br></br>
        {this.putContent()}
      </div>
    )
  }
}
const mapToProps = (reducer) => {
  return reducer.userReducers;
}
export default connect(mapToProps, userActions)(User);
