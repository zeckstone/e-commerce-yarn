import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/hompage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
