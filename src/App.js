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


function App() {
  return (
    <Router>
       <Switch>
         <Route exact path="/home">
           <Home />
         </Route>
         <Route exact path="/all">
           <All/>
         </Route>
       </Switch>
   </Router>

  );
}

export default App;
