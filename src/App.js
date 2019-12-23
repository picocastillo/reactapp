import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import All from './pages/All';
import Layout from './Layout';
const NotFound = () =>{
  return (
    <p>Pagina no encontrada..</p>
  )
}

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/all">
            <All/>
          </Route>
          <Route >
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </Layout>

  );
}

export default App;
