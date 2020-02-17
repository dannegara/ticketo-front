import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/button';

interface State{
    msg?: string
}
interface LoginProps{
    msg?: string
}

class Login extends Component<LoginProps, State>{
    render(){
        return(
            <div>
                Login
                <Button />
                <Link to="/register" style={{color: '#fff'}}>Register</Link>
            </div>
        )
    }
}

export default Login;