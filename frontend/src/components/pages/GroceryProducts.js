// import React from 'react';
import React, { Component } from 'react';
// import { Grid } from '@material-ui/core'
// import Product from '../Product'
// import { useState, useEffect } from 'react'
// import SearchBar from '../SearchBar'
import GroceryItems from '../GroceryItems/GroceryItems1'
import GroceryItems2 from '../GroceryItems/GroceryItems2'
import GroceryItems3 from '../GroceryItems/GroceryItems3'
import GroceryItems4 from '../GroceryItems/GroceryItems4'
import GroceryItems5 from '../GroceryItems/GroceryItems5'
import GroceryItems6 from '../GroceryItems/GroceryItems6'
import GroceryItems7 from '../GroceryItems/GroceryItems7'
import GroceryItems8 from '../GroceryItems/GroceryItems8'
import GroceryItems9 from '../GroceryItems/GroceryItems9'
import GroceryItems10 from '../GroceryItems/GroceryItems10'

import GroceryStores from './GroceryStores'
import GroceryCart from './GroceryCart';




// const GroceryProducts = (props) => {
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: []
        }
    // const [products, setProducts] = useState([]);
    // var id = getParameter('id')

    // function getParameter(parameterName) {
    //     let parameters = new URLSearchParams(window.location.search);
    //     return parameters.get(parameterName);

    // return parameters.get(parameterName);
        this.addToCart = this.addToCart.bind(this)
        this.removeFromCart = this.removeFromCart.bind(this)
    }
// }

// useEffect(() => {
//     fetch('http://54.151.124.251:8000/groceryproducts/?id=' + id)
//         .then(resp => resp.json())
//         .then(resp => {
//             console.log(resp)
//             setProducts(resp)
//         })

// })
// return (
//     <>
//         <SearchBar placeholder='Enter product name:' handleChange={( e ) => console.log(e)} />

//             <Grid container justify='center' style={{
//                 backgroundColor: '#EE6590', marginTop: '11vh'
//             }}>
//                 {products.map((product) => (
//                     <Grid item key={product.product_id} xs={12} sm={6} md={4} lg={3} style={{ border: '10px solid #EE6590' }}>
//                         <Product product={product} />
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     )
// }
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
                <GroceryItems3 addToCart = {this.addToCart}/>
                <GroceryCart items = {this.state.cart}
                            removeFromCart = {this.removeFromCart} />
            </div>
        </div>
        }
    

}

// export default GroceryProducts; 