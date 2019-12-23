import React from 'react';

import Header from '../components/Header';

class All extends React.Component {
  state = {
    form: {
      email: '',
      text: ''
    }
  }
  handleChange = e => {
    this.setState({
      form: {
        ... this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }
  render(){
    return(
      <div>
        <p>WE ARE ALL
        </p>
      </div>
    )
  }
}

export default All;
