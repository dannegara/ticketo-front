import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    FaSignOutAlt,
    FaUserCircle,
    FaShoppingCart
} from 'react-icons/fa';
import './style.scss';
import Button from '../button';
import Logo from '../logo';

interface IState{
    sidebar: string[],
    background: string[]
}
interface IProps{
    isAuth: boolean,
    logout: () => void
}

class NavBar extends Component<IProps,IState> {

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
        const { isAuth, logout } = this.props;

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
                    {!isAuth ? (
                        <div className="links-container">
                            <Link to="/login"><Button>Login</Button></Link>
                            <Link to="/register"><Button>Register</Button></Link>
                        </div>
                    ) : (
                        <div className="links-container">
                            <Link to="/cart"><FaShoppingCart /></Link>
                            <Link to="/profile"><FaUserCircle /></Link>
                            <FaSignOutAlt onClick={logout} />
                        </div>
                    )}
                </nav>
                <div className="sidebar-container">
                    <div className={background.join(' ')} onClick={this.removeSidebar}></div>
                    <div className={sidebar.join(' ')}>
                        <ul>
                            <li>
                                <Link to="/cart"><FaShoppingCart /> Cart</Link>
                            </li>
                            <li>
                                <Link to="/profile"><FaUserCircle /> Profile</Link>
                            </li>
                            <li>
                                <FaSignOutAlt onClick={logout} /> Logout
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;