import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';


// import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import All from './pages/All';
import User from './pages/User';
import Task from './pages/Task';
import Layout from './Layout';
const NotFound = () =>{
  return (
    <p>Pagina no encontrada..</p>
  )
}

function App() {
  return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/all">
              <All/>
            </Route>
            <Route exact path="/users">
              <User/>
            </Route>
            <Route exact path="/tasks">
              <Task/>
            </Route>
            <Route >
              <NotFound/>
            </Route>
          </Switch>
        </Layout>
      </Router>

  );
}

export default App;
