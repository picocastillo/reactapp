import React from 'react';
import {connect} from 'react-redux';
import Spinner from '../components/Spinner'
import Fatal from '../components/Fatal'
import {Link} from 'react-router-dom';

import * as taskActions from '../reducers/taskActions';

class Task extends React.Component {
  componentDidMount(){
    this.props.getAll();

  }
  putContent(){
    const {error, loading, tasks} = this.props
    if (loading){
      return <Spinner />
    }
    if (error){
      return <Fatal message={error} />
    }

    return Object.keys(tasks).map( (user_id, key)  => (
       <div key={key}>
         <h3>Usuario con ID {user_id}</h3>
           <div className="container_task">
             {this.putTasks(user_id)}
           </div>
       </div>
    ))
  }

  putTasks = (user_id) => {
    const {tasks} = this.props

    const by_user = {
      ...tasks[user_id]
    }

    return Object.keys(by_user).map( (task_id, key) => (
      <div className="row task" key={key}>
        <br />
        <li>
          {(by_user[task_id].completed) ? <s>{by_user[task_id].title}</s> : by_user[task_id].title }
        </li>
        &nbsp;
        <Link to={`/tasks/new/${by_user[task_id].title}/${by_user[task_id].userId }`}>
          <button className="btn btn-secondary btn-medium">Editar</button>
        </Link>
        &nbsp;
        <button className="btn btn-danger btn-medium">Eliminar</button>
        <br />
      </div>
    ))
  }
  render(){
    return(
      <div>
        <Link to="/tasks/new" >
          <button className="btn btn-primary"> Agregar nueva tarea </button>
        </Link>
        <br />
        <br />
        {this.putContent()}
      </div>
    )
  }

}

const mapToProps = (reducer) => {
  return reducer.taskReducer;
}
export default connect(mapToProps, taskActions)(Task);
