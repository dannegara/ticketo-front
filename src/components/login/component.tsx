import React, { Component } from 'react';
import LoginForm from './login-form';
import './style.scss';
import api from '../../api';
import { ILogin } from '../../api/types';

const STYLE_DEFAULT_LOGIN: string = 'login-container';

interface State{
    isLoading: boolean,
    error: boolean
}
interface LoginProps{
    msg?: string,
    history?: any,
    login: () => void
}

class Login extends Component<LoginProps, State>{

    state = {
        isLoading: false,
        error: false
    }

    submitForm = async (values: ILogin) => {
        const { history: { push }, login } = this.props
        try {
            const { data: { msg, token } } = await api.login(values);
            if(msg === 'login success') {
                localStorage.setItem('token', token);
                login();
                push('/');
            }else {
                this.setState({ error: true });
            }
        }catch(err) {
            this.setState({ error: true })
        }
    }

    render(){
        const {
            isLoading,
            error,
        } = this.state;
        return(
            <div className={STYLE_DEFAULT_LOGIN}>
                <LoginForm isLoading={isLoading} submit={this.submitForm} error={error} />
            </div>
        )
    }
}

export default Login;