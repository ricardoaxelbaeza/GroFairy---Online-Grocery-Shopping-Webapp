import '../../App.css'
// import HeroSection from '../HeroSection'
import "./ShoppingCart.css";
import CartItem from "./CartItem/CartItem.js";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button, Container, Grid, Typography } from '@material-ui/core'
// import Product from "../Product.js";


const ShoppingCart = () => {
    const url = 'http://54.151.124.251:8000/shoppingcart/?format=json'
    const [cart, setCart] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setCart(data)
            })
    }, [cart]) 

    const handleUpdateCartQuantity = (cart_id, item, price, quantity) => {
        const data = {cart_id, item, price, quantity}
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
        };
        fetch('http://54.151.124.251:8000/shoppingcart/', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        }).catch(rejected => {
            console.log(rejected);
        });
    }

    const handleRemoveFromCart = (cart_id) => {
        const data = {cart_id}
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Access-Control-Request-Method': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
        };
        fetch('http://54.151.124.251:8000/shoppingcart/', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        }).catch(rejected => {
            console.log(rejected);
        });
    }

    const emptyCart = () => (
        <Typography variant="subtitle1" className="empty-cart">You have no items in your cart. Try adding some!</Typography>
    )

    const filledCart = () => (
        <div className="shopping-cart">
            <Grid container spacing={3}>
                {cart.map((item) => (
                    <Grid item xs={12} sm={4} key={item.cart_id}>
                        <CartItem item={item} onUpdateCartQuantity={handleUpdateCartQuantity} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid> 
            <div className="card-details">
                <Typography variant="h4">
                    Subtotal: ${subtotal()}
                </Typography>
                <Button className="checkout" component={Link} to="/checkout" size="large" type="button" variant="contained">
                    Checkout
                </Button>
            </div>
        </div>
    )

    const subtotal = () => {
        let subtotal = 0;
        cart.forEach (item => {
            subtotal = subtotal + (item.price * item.quantity)
        })
        return Math.round(subtotal * 100) / 100;
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