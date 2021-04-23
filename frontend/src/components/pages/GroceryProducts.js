import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { useState, useEffect } from 'react'
import GroceryItems from '../GroceryItems';
import GroceryCart from './GroceryCart';

export default class App extends Component {
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
