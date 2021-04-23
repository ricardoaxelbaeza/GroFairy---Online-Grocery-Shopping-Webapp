import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        GroFairy <i class="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/grocerystores" className="nav-links" onClick={closeMobileMenu}>
                                Grocery Stores
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
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

export default Navbar
