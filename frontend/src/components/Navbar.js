import React, { useState } from 'react';
import {Button} from 'antd';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { connect } from 'react-redux'
import * as actions from './pages/actions/auth'
import './Navbar.css';

class Navbar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            click: false
        }
    }
    handleClick = () => {
        const {click_change} = this.state
        this.setState = {
            click_change: !click_change
        }
    }
    
    closeMobileMenu = () => {
        this.setState = {
            click_change: false
        }
    }
    render() {
        const {click_change} = this.state,
        {handleClick} = this, {closeMobileMenu} = this;
        return (
            <>
                <nav className="navbar">
                    <div className="navbar-container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            GroFairy <i class="fab fa-typo3"></i>
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click_change ? "fas fa-times" : "fas fa-bars"} />
                        </div>
                        <ul className={click_change ? "nav-menu active" : "nav-menu"}>
                            {
                                this.props.isAuthenticated ?
                                
                                <li className="nav-item">
                                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                        Welcome, {localStorage.username}.
                                    </Link>
                                </li>

                                :

                                <li className="nav-item">
                                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                        Home
                                    </Link>
                                </li>
                            }
                            
                            <li className="nav-item">
                                <Link to="/grocerystores" className="nav-links" onClick={closeMobileMenu}>
                                    Grocery Stores
                                </Link>
                            </li>
                            {
                                this.props.isAuthenticated ?
    
                                <li className="nav-item">
                                    <Link to="/" className="nav-links" onClick={this.props.logout}>
                                        Logout
                                    </Link>
                                </li>
    
                                :
    
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
                                        Sign Up
                                    </Link>
                                </li>
                            }
                            <li className="nav-item">
                                <Link to="/shoppingcart" className="nav-links" onClick={closeMobileMenu}>
                                    <ShoppingCartIcon />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}
  
export default connect(null, mapDispatchToProps)(Navbar);
