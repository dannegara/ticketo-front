import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Button from '../button';
import Logo from '../logo';

class NavBar extends Component {

    state = {
        sidebar: ["sidebar"],
        background: ["sidebar-background"]
    }

    turnSidebar = () => {
        this.setState({
            sidebar: ["sidebar", "show-sidebar"],
            background: ["sidebar-background", "show-sidebar-background"]
        });
    }

    removeSidebar = () => {
        this.setState({
            sidebar: ["sidebar"],
            background: ["sidebar-background"]
        });
    }

    render(){
        const { sidebar, background } = this.state;
        return(
            <div>
                <nav>
                    <div className="side-menu-opener" onClick={this.turnSidebar}>
                        <span className="sandwich"></span>
                        <span className="sandwich"></span>
                        <span className="sandwich"></span>
                    </div>
                    <div className="logo-container">
                        <Link to="/"><Logo /></Link>
                    </div>
                    <div className="links-container">
                        <Link to="/login"><Button>Login</Button></Link>
                        <Link to="/register"><Button>Register</Button></Link>
                    </div>
                </nav>
                <div className="sidebar-container">
                    <div className={background.join(' ')} onClick={this.removeSidebar}></div>
                    <div className={sidebar.join(' ')}>
                        <ul>
                            <li>fhdsbkasbs</li>
                            <li>fhdsbkasbs</li>
                            <li>fhdsbkasbs</li>
                            <li>fhdsbkasbs</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;