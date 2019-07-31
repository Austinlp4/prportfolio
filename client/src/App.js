import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}></Route>
      <Route path="/admin" component={Dashboard}></Route>
    </div>
  );
}

export default withRouter(App);