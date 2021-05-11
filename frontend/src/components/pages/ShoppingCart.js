import '../../App.css'
// import HeroSection from '../HeroSection'
import "./ShoppingCart.css";
// import CartItem from "./CartItem";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
// import Product from "../Product.js";


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
                <h2>Shopping cart</h2>

                {/* <CartItem /> */}
            </div>
            <div className="shoppingcart_right">
                <div className="shoppingcart_info">
                    <p>Subtotal (4) items</p>
                    <p>$27.18</p>
                </div>
                <div>
                    <button>
                        <Link to='/checkout' style={{color: 'white'}}>
                            Proceed To Checkout
                        </Link>
                    </button>
                </div>
            </div>
            <div>
        </div>
        {cart.map((cartitems) => (
                    <Grid item key={cartitems.cart_id} xs={12} sm={6} md={4} lg={3} style={{ border: '10px solid #EE6590' }}>
                        <Typography variant='body2' color='textSecondary'>
                            Item: {cartitems.item}
                            <p/>
                            Price: {cartitems.price}
                            <p/>
                            Quantity: {cartitems.quantity}
                        </Typography>
                    </Grid>
                ))}
        </div>
        // This whole cart.map here
    );
};


export default ShoppingCart;