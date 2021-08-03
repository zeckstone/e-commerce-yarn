import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/hompage/hompage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop/hats' component={HatsPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
