import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Input from '../../UI/input';
import Button from '../../UI/button';
import Spinner from '../../UI/spinner';

const STYLE_DEFAULT_INPUT: string = "default-input";
const STYLE_DEFAULT_CONTAINER: string = "login-block";

interface ILoginForm{
    isLoading: boolean,
    submit: any
}

const LoginForm: React.SFC<ILoginForm> = ({
    isLoading,
    submit
}) => {
    return(
        <div className={STYLE_DEFAULT_CONTAINER}>
            <Input 
                className={`${STYLE_DEFAULT_INPUT} login-page-input`} 
                placeholder="Login"
            />
            <Input 
                className={`${STYLE_DEFAULT_INPUT} login-page-input`} 
                placeholder="Password" 
            />
            {!isLoading ? <Button onClick={submit}>Login</Button>:
            <Spinner />}
            <p className="plain-text">
                Don't have an account? <Link to="/register" className="link">Register</Link>
            </p>
        </div>
    )
}

export default LoginForm;