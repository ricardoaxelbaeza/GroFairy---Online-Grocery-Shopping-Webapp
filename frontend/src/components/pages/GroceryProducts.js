/*
import React from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { useState, useEffect } from 'react'

import SearchBar from '../SearchBar'

const GroceryProducts = (props) => {
    const [products, setProducts] = useState([]);
    var id = getParameter('id')

    function getParameter(parameterName) {
        let parameters = new URLSearchParams(window.location.search);
        return parameters.get(parameterName);
}

useEffect(() => {
    fetch('http://54.151.124.251:8000/groceryproducts/?id=' + id)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            setProducts(resp)
        })

})
return (
    <>
        <SearchBar placeholder='Enter product name:' handleChange={( e ) => console.log(e)} />
            <Grid container justify='center' style={{
                backgroundColor: '#EE6590', marginTop: '11vh'
            }}>
                {products.map((product) => (
                    <Grid item key={product.product_id} xs={12} sm={6} md={4} lg={3} style={{ border: '10px solid #EE6590' }}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

*/
import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { useState, useEffect } from 'react'
import GroceryItems from '../GroceryItems';
import GroceryCart from './GroceryCart';

export default class GroceryProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: []
        }

        this.addToCart = this.addToCart.bind(this)
        this.removeFromCart = this.removeFromCart.bind(this)
    }

    addToCart(item) {
        console.log('item: ', item)
        const cart = [...this.state.cart, item]
        this.setState({cart})
    }

    removeFromCart(index) {
        const cart = [...this.state.cart]
        cart.splice(index, 1)
        this.setState({cart})
    }

    render() {
        return <div id ="app-container">
            <div id = "grocery-container">
                <GroceryItems addToCart = {this.addToCart}/>
                <GroceryCart items = {this.state.cart}
                            removeFromCart = {this.removeFromCart} />
            </div>
        </div>
    }
    
}