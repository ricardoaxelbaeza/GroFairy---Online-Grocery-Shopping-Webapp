import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { Link } from 'react-router-dom';

const GROCERY_ITEMS6 = [
    {store_id: 6, product_id: 9, stock: 34, unit_price: 2.09, product_name: "Initation Crab Meat", product_image: "https://images.heb.com/is/image/HEBGrocery/001405713"},
    {store_id: 6, product_id: 13, stock: 100, unit_price: 13.2, product_name: "Wine - Cahors Ac 2000, Clos", product_image: "http://www.astorwines.com/images/items/30367_hr.jpg"},
    {store_id: 6, product_id: 45, stock: 23, unit_price: 4.28, product_name: "Cheese Cloth 60", product_image: "https://m.media-amazon.com/images/I/71JtdCwE1DL._AC_SS450_.jpg"},
    {store_id: 6, product_id: 54, stock: 57, unit_price: 11.27, product_name: "Doritos", product_image: "https://images-na.ssl-images-amazon.com/images/I/71MQeIS7FAL._SL1500_.jpg"},
    {store_id: 6, product_id: 89, stock: 60, unit_price: 7.29, product_name: "Lychee - Canned", product_image: "https://m.media-amazon.com/images/I/81WQW5T8CYL._SL1500_.jpg"},
    {store_id: 6, product_id: 98, stock: 53, unit_price: 14.92, product_name: "Mango", product_image: "https://images.albertsons-media.com/is/image/ABS/184150300?$ecom-pdp-desktop$&defaultImage=Not_Avail"},
]


export default class GroceryItems6 extends Component {
    render() {
        return <div id = "grocery-items">
            <>
                <Grid container justify='left' style={{
                    backgroundColor: '#EE6590', marginTop: '11vh'
                }}>
                    {GROCERY_ITEMS6.map((product) => (
                        <Grid item key={product.product_id} xs={12} sm={6} md={4} lg={3} style={{ border: '6px solid #EE6590' }}>
                            <Product product={product} />
                            <button onClick={()=>this.props.addToCart(product)}>
                                Add To Cart
                            </button>
                        </Grid>
                    ))}
                </Grid>
            </>
        </div>
    }
}