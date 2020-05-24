import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Input from '../../UI/input';
import Button from '../../UI/button';
import Spinner from '../../UI/spinner';
import ErrorMessage from '../../UI/form-error-message';

const STYLE_DEFAULT_INPUT: string = "default-input";
const STYLE_DEFAULT_CONTAINER: string = "login-block";

interface ILoginForm{
    isLoading: boolean,
    submit: any,
    error: boolean
}

const LoginForm: React.SFC<ILoginForm> = ({
    isLoading,
    submit,
    error,
}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className={STYLE_DEFAULT_CONTAINER}>
            <Input 
                className={`${STYLE_DEFAULT_INPUT} login-page-input`} 
                placeholder="Login"
                onChange={(event) => setLogin(event.currentTarget.value)}
            />
            <Input 
                className={`${STYLE_DEFAULT_INPUT} login-page-input`} 
                placeholder="Password" 
                onChange={(event) => setPassword(event.currentTarget.value)}
                type="password"
            />
            {!isLoading ? <Button onClick={() => submit({ login, password })}>Login</Button>:
            <Spinner />}
            {error && <ErrorMessage text="Invalid login or password" />}
            <p className="plain-text">
                Don't have an account? <Link to="/register" className="link">Register</Link>
            </p>
        </div>
    )
}

export default LoginForm;