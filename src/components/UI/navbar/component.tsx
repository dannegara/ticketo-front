import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Button from '../button';
import Logo from '../logo';

interface INavBarProps{
    name?: string
}

const NavBar : React.SFC<INavBarProps> = ( ) => {
    return(
        <nav>
            <div className="logo-container">
                <Link to="/"><Logo /></Link>
            </div>
            <div className="links-container">
                <Link to="/login"><Button>Login</Button></Link>
                <Link to="/register"><Button>Register</Button></Link>
            </div>
        </nav>
    )
}

export default NavBar;