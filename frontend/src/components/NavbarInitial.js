import React from 'react';
import Navbar from './Navbar';
import './Navbar.css';


class NavbarInitial extends React.Component {
    /*
    constructor(props) {
        super(props);
    }
    */

    render() {
        return (
            <div>
            <Navbar auth = {this.props.isAuthenticated} logout = {this.props.logout}/>
            </div>
        )
    }
}



export default NavbarInitial