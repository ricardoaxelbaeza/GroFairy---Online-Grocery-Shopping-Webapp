import '../../App.css'
// import HeroSection from '../HeroSection'
import "./ShoppingCart.css";
// import CartItem from "./CartItem";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import Product from "../Product.js";


const ShoppingCart = () => {
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/shoppingcart/?format=json')
        .then(resp => resp.json())
        .then(resp => {
          console.log(resp)
          setCart(resp)
        })
  
    }, [])
    return (
        <div className="shoppingcart" style={{ marginTop: '11vh' }}>
            <div className="shoppingcart_left">
                <h2>Shopping cart</h2>
            </div>
        </div>
    );
};


export default ShoppingCart;