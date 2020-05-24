import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import Login from './components/login';
import Register from './components/register';
import NavBar from './components/UI/navbar';
import Feed from './components/feed';
import Event from './components/event';
import Purchase from './components/purchase';
import SplashScreen from './components/splash-screen';
import { checkToken } from './store/actions/auth';
import ProtectedRoute from './helpers/ProtectedRoute';
import NotFound from './components/not-found';
 
class App extends Component{

  state = {
    isLoading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 500);
    //this.props.checkToken();
  }

  render(){
    console.log(this.props.isAuth);
    if(this.state.isLoading) return <SplashScreen />

    return(
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Feed />
          </Route>
          <ProtectedRoute
            component={Login}
            exact
            requireAuth={false}
            path="/login"
          />
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/event/:eventId" exact component={Event} />
          <Route path="/purchase/:eventId" exact component={Purchase} />
          <Route path="/not-found" exact component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    )
  }
}

export default connect(
  (state, props) => {
    return {
      isAuth: state.auth.isAuth
    }
  },
  {
    checkToken
  }
)(App);
