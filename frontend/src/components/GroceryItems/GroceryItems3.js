import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { Link } from 'react-router-dom';

const GROCERY_ITEMS3 = [
    {store_id: 3, product_id: 52, stock: 35, unit_price: 2.96, product_name: "Water - Green Tea Refresher", product_image: "https://images-na.ssl-images-amazon.com/images/I/71r4769%2B3mL._SL1500_.jpg"},
    {store_id: 3, product_id: 54, stock: 15, unit_price: 16.39, product_name: "Doritos", product_image: "https://images-na.ssl-images-amazon.com/images/I/71MQeIS7FAL._SL1500_.jpg"},
    {store_id: 3, product_id: 59, stock: 5, unit_price: 3.07, product_name: "Wine - Savigny - Les - Beaune", product_image: "https://cdn.shoplightspeed.com/shops/603808/files/24704766/savigny-les-beaune-les-pimentiers-2017-pe"},
    {store_id: 3, product_id: 66, stock: 16, unit_price: 10.11, product_name: "Cheese Cloth", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 3, product_id: 86, stock: 6, unit_price: 7, product_name: "Avocado", product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQZlhpmXNYw997OAvhZOgSIAq1Tv5VTWAeO-YSppMShFs"},
]

export default class GroceryItems3 extends Component {
    render() {
        return <div id = "grocery-items">
            <>
                <Grid container justify='left' style={{
                    backgroundColor: '#EE6590', marginTop: '11vh'
                }}>
                    {GROCERY_ITEMS3.map((product) => (
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