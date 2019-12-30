import React from 'react';
import {connect} from 'react-redux';
import * as sessionActions from '../reducers/sessionActions';

import SignIn from '../components/SignIn';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }
  changeEmail = e => {
    this.setState({
      email: e.target.value,
    })
  }
  changePassword = e => {
    this.setState({
      password: e.target.value,
    })
  }
  submit = (e) => {
    e.preventDefault()
    this.props.login(this.state.email,this.state.password);

  }
  render(){
    return(
      <div className="container">
        <br />
        <br />
        <SignIn email={this.changeEmail} header="Ingresar" password={this.changePassword} click={this.submit}/>
      </div>
    )
  }
}
const mapToProps = ({sessionReducer}) => {return sessionReducer}

export default connect(mapToProps,sessionActions)(Login);
