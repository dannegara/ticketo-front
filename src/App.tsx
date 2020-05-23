import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Login from './components/login';
import Register from './components/register';
import NavBar from './components/UI/navbar';
import Feed from './components/feed';
import Event from './components/event';
import Purchase from './components/purchase';
import withSplashScreen from './hoc/with-splash-screen';

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
          <Route path="/event/:eventId" exact component={Event} />
          <Route path="/purchase/:eventId" exact component={Purchase} />
          <Redirect to="/login" />
        </Switch>
      </div>
    )
  }
}

export default withSplashScreen(App);
