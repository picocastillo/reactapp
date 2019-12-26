import React from 'react';
import axios from 'axios';

import {connect} from 'react-redux';


class User extends React.Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  async componentDidMount(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      users: res.data
    })
  }
  putRows = () => (
    this.state.users.map((user)=>(
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
    console.log(this.props)
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
export default connect(mapToProps, {})(User);
