import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Login from './components/login';
import Register from './components/register';
import NavBar from './components/UI/navbar';
//import { FaBeer } from 'react-icons/fa';

export interface HelloProps{
  compiler: string;
  framework: string;
  notNecessaryProps?: string;
}

// const App: React.FunctionComponent<HelloProps> = props => {
// }

// interface State{
//   count: number;
// }

// class Counter extends React.Component<HelloProps, State>{
//   state: State = {
//     count: 0
//   }
// }

class App extends Component{

  render(){

    return(
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <div></div>
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
