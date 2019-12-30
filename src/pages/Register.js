import React from 'react';

import SignUp from '../components/SignUp';

class Register extends React.Component {
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
        <SignUp email={this.changeEmail} header="Registrarse" password={this.changePassword} click={this.submit}/>
      </div>
    )
  }
}

export default Register;
