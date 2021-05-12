import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import GroceryProducts from './GroceryProducts'

export default class GroceryCart extends Component {
    total() {
        return this.props.items.reduce((total, item) => {
            return total + item.unit_price
        }, 0)
    }
    render() {
        // if (this.props.items.length === 0) {
        //     return <div id = "grocery-cart">
        //         <p>Cart is empty</p>
        //     </div>
        // }
        return <div id ="grocery-cart"> 
            <table border = "1">
                <tbody>
                    {/* <tr>
                        <th></th>
                        <th>Item Price</th>
                        <th>Item Name </th>
                    </tr> */}
                    {/* {this.props.items.map((item, index) =>{
                        return <tr key = {index}>
                            <td>
                                <button onClick = {() => this.props.removeFromCart(index)}>
                                    Remove from Cart
                                </button>
                            </td>
                            <td>{item.unit_price}</td>
                            <td>{item.product_name}</td>
                        </tr>
                    })} */}
                </tbody>
            </table>
            {/* <p>
                Total: ${this.total()}
            </p> */}
            </div>
    }
}