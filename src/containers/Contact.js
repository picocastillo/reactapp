import React from 'react';



class Contact extends React.Component {
  state = {}
  changeEmail = (e) => {
    console.log(e)

  }
  changeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  click = (e) => {
    e.preventDefault();
    console.log("asd")
  }
  render(){
    return(
      <div className="container">
      <h1>Contactarme</h1>
      <form >
        <div className="form-group row">
          <label>Correo Electrónico</label>
          <input onChange={this.props.onChange}
          value = {this.state.email}
           type="email" name="email" className="form-control" />
        </div>
        <div className="form-group row">
          <label >Mensage</label>
          <textarea
          value = {this.state.text}
          onChange={this.props.onChange}  className="form-control" name="text" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button onClick={this.click} className="btn btn-primary"> Enviar
        </button>

      </form>
      </div>

    )
  }
}

export default Contact;
