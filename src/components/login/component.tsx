import React, { Component } from 'react';
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
            </div>
        )
    }
}

export default Login;