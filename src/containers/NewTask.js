import React from 'react';
import {connect} from 'react-redux';
import Spinner from '../components/Spinner'
import Fatal from '../components/Fatal'
import {Redirect} from 'react-router';

import * as taskActions from '../reducers/taskActions';


class NewTask extends React.Component {
  state = {
    userId: '',
    title: ''
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  click = (e) => {
    e.preventDefault();
    this.props.addNew(this.state.userId,this.state.title)
  }
  isDisable = () => {
    if (!this.state.userId || !this.state) return true;
    return false;
  }
  render(){
    if (this.props.redirect){
      return <Redirect to="/tasks" />;
    }
    return(
      <div className="container">
      <h1>Nueva Tarea</h1>
      <form >
        <div className="form-group row">
          <label>Usuario ID</label>
          <input onChange={this.change}
          value = {this.state.userId}
           type="number" name="userId" className="form-control" />
        </div>
        <div className="form-group row">
          <label >Titulo</label>
          <input
          value = {this.state.title}
          onChange={this.change}  className="form-control" name="title" type="text" ></input>
        </div>
        <button onClick={this.click} disabled= {!this.state.userId || !this.state.title ? 1 : 0 } className="btn btn-primary"> Guardar
        </button>

      </form>
      </div>

    )
  }
}

const mapToProps = ({taskReducer}) => {return taskReducer}
export default connect(mapToProps,taskActions)(NewTask);
