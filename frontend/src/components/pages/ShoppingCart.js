import '../../App.css'
// import HeroSection from '../HeroSection'
import "./ShoppingCart.css";
import CartItem from "./CartItem";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import Product from "../Product.js";


const ShoppingCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://54.151.124.251:8000/shoppingcart/?format=json')
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                setCart(resp)
            })

    }, [])
    return (
        <div className="shoppingcart" style={{ marginTop: '11vh' }}>
            <div className="shoppingcart_left">
                <CartItem />
            </div>
            <div className="shoppingcart_right">
                <div className="shoppingcart_info" >
                    <p>Subtotal (4) items</p>
                    <p>$27.18</p>
                </div>
                <div>
                    <button>
                        <Link to='/checkout' style={{ color: 'white' }}>
                            Proceed To Checkout
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default ShoppingCart;