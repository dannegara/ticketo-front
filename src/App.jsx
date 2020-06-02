import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import NavBar from './components/UI/navbar';
import SplashScreen from './components/splash-screen';
import { checkToken, logout } from './store/actions/auth';
import { checkToken as apiCheckToken } from './api/auth';
import Routes from './routes';
 
class App extends Component{

  state = {
    isLoading: true
  }

  async componentDidMount() {
    try {
      const { data } = await apiCheckToken();
      this.props.checkToken(data);
    } catch (error) {
      this.props.logout();
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render(){
    if(this.state.isLoading) return <SplashScreen />

    return(
      <div>
        <NavBar />
        <Routes />
      </div>
    )
  }
}

export default connect(
  (state, props) => {
    return {
      isAuth: state.auth.isAuth,
      profile: state.auth.profile
    }
  },
  {
    checkToken,
    logout
  }
)(App);
