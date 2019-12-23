import React from 'react';

import Header from '../components/Header';
import Contact from '../containers/Contact';

class Home extends React.Component {
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
        <Contact onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Home;
