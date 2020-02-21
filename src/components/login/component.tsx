import React, { Component } from 'react';
import LoginForm from './login-form';
import './style.scss';

const STYLE_DEFAULT_LOGIN: string = 'login-container';

interface State{
    isLoading: boolean
}
interface LoginProps{
    msg?: string
}

class Login extends Component<LoginProps, State>{

    state = {
        isLoading: false
    }

    render(){
        const {
            isLoading
        } = this.state;
        return(
            <div className={STYLE_DEFAULT_LOGIN}>
                <LoginForm isLoading={isLoading} />
            </div>
        )
    }
}

export default Login;