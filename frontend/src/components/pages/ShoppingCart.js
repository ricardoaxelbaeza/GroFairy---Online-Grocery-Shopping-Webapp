import '../../App.css'
// import HeroSection from '../HeroSection'
import "./ShoppingCart.css";
import CartItem from "./CartItem/CartItem.js";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button, Container, Grid, ListItemSecondaryAction, Typography } from '@material-ui/core'
import Product from "../Product.js";


const ShoppingCart = () => {
    const url = 'http://127.0.0.1:8000/shoppingcart/?format=json'
    const [cart, setCart] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setCart(data)
            })
    }, []) 

    const emptyCart = () => (
        <Typography variant="subtitle1">You have no items in your cart. Try adding some!</Typography>
    )

    const filledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.map((item) => (
                    <Grid item xs={12} sm={4} key={item.cart_id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid> 
            <div className="card-details">
                <Typography variant="h4">
                    Subtotal: {subtotal()}
                </Typography>
                <Button className="empty" size="large" type="button" variant="contained">
                    Empty Cart
                </Button>
                <Button className="checkout" component={Link} to="/checkout" size="large" type="button" variant="contained">
                    Checkout
                </Button>
            </div>
        </>
    )

    const subtotal = () => {
        let subtotal = 0;
        cart.forEach (item => {
            subtotal = subtotal + (item.price * item.quantity)
        })
        return subtotal;
    }

    if(cart) {
        const isEmpty = !cart.length;
        return (
            <Container>
                <div className="cart">
                    <Typography className="cart-1" variant="h3">Your Shopping Cart</Typography>
                    {isEmpty ? emptyCart(): filledCart()}
                </div>
            </Container>
        );
    }

    return(
        <div>

        </div>
    )
};


export default ShoppingCart;