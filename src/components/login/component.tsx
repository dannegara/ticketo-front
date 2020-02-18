import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/button';
import Input from '../UI/input';

const STYLE_DEFAULT_INPUT = "default-input";

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
                <Input placeholder="place" className={STYLE_DEFAULT_INPUT} />
            </div>
        )
    }
}

export default Login;