import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Login from './components/login';
import Register from './components/register';
//import { FaBeer } from 'react-icons/fa';

export interface HelloProps{
  compiler: string;
  framework: string;
  notNecessaryProps?: string;
}

// const App: React.FunctionComponent<HelloProps> = props => {

//   return (
//     <div className="App">
//       {props.compiler}
//       <header className="App-header">
//         {props.framework}
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
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
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Redirect to="/login" />
      </Switch>
    )
  }
}

export default App;
