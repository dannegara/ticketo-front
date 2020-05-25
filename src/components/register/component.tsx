import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../UI/input';
import Button from '../UI/button';
import './styles.scss';

export default class extends Component{

    render(){
        return(
            <div className="register-container">
                <form>
                    <Input />
                    <Button>Register</Button>
                    Already have an account?
                    <Link to="/login" style={{color: '#fff'}}>Login</Link>
                </form>
            </div>
        )
    }
}