import React, { Component } from 'react';
import LoginForm from './login-form';
import './style.scss';

const STYLE_DEFAULT_LOGIN: string = 'login-container';

interface State{
    msg?: string
}
interface LoginProps{
    msg?: string
}

class Login extends Component<LoginProps, State>{
    render(){
        return(
            <div className={STYLE_DEFAULT_LOGIN}>
                <LoginForm />
            </div>
        )
    }
}

export default Login;