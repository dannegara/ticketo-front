import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component{

    render(){
        return(
            <div>
                Register
                <Link to="/login" style={{color: '#fff'}}>Login</Link>
            </div>
        )
    }
}