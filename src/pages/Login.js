import React from 'react';

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
    console.log(this.state)
  }
  render(){
    return(
      <div className="container">
        <br />
        <br />
        <SignIn email={this.changeEmail} password={this.changePassword} click={this.submit}/>
      </div>
    )
  }
}

export default Login;
