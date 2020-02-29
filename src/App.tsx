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
import api from './api/index';

export interface HelloProps{
  compiler: string;
  framework: string;
  notNecessaryProps?: string;
}

class App extends Component{

  async componentDidMount(){
    // const data = await api.getCountries();
    // console.log(data);
    const data = await api.getCountry(21);
    console.log(data.data);
  }

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
