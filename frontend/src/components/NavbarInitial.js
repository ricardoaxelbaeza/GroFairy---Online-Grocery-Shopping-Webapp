import React, { useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { connect } from 'react-redux'
import * as actions from './pages/actions/auth'
import './Navbar.css';


class NavbarInitial extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Navbar auth = {this.props.isAuthenticated} logout = {this.props.logout}/>
            </div>
        )
    }
}



export default NavbarInitial