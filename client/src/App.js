import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}></Route>
    </div>
  );
}

export default withRouter(App);