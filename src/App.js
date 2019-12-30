import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import * as sessionActions from './reducers/sessionActions';


// import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import All from './pages/All';
import User from './pages/User';
import Task from './pages/Task';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './Layout';
import Publications from './pages/Post';
import NewTask from './containers/NewTask';


const NotFound = () =>{
  return (
    <p>Pagina no encontrada..</p>
  )
}

function App(props) {
  if (!props.logged){
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route component={Login} />
        </Switch>
      </Router>
    )
  }else {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/all" component={All}/>
            <Route exact path="/users" component={User}/>
            <Route exact path="/tasks" component={Task}/>
            <Route exact path="/tasks/new" component={NewTask}/>
            <Route exact path="/tasks/new/:title/:userId" component={NewTask}/>
            <Route exact path="/publications/:key" component={Publications} />
            <Route  component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}
const mapToProps = ({sessionReducer}) => {return sessionReducer}
export default connect(mapToProps,sessionActions)(App);
