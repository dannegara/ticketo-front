import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Login from './components/login';
import Register from './components/register';
import NavBar from './components/UI/navbar';
import Feed from './components/feed';

class App extends Component{

  render(){

    return(
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Feed />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </div>
    )
  }
}

export default App;
