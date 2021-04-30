
import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { Link } from 'react-router-dom';

const GROCERY_ITEMS4 = [
    {store_id: 4, product_id: 6, stock: 40, unit_price: 9.47, product_name: "Peach - Halves", product_image: "https://cdn.powered-by-nitrosell.com/product_images/23/5695/large-livadapeachesinlightsyrup.png"},
    {store_id: 4, product_id: 10, stock: 10, unit_price: 18.09, product_name: "Tomatoes - Cherry, Yellow", product_image: "https://cdn.shopify.com/s/files/1/1575/0603/products/CherryTomatoYellow_Approx.250g_800x.jpg?v=15996"},
    {store_id: 4, product_id: 19, stock: 1, unit_price: 7.83, product_name: "Ecolab - Lime - A - Way 4/4 L", product_image: "https://catalog.nationalew.com/images/prdimgs/ECO/450/ECO6101131.JPG"},
    {store_id: 4, product_id: 27, stock: 79, unit_price: 18, product_name: "Beyon Beef", product_image: "https://images-na.ssl-images-amazon.com/images/I/71nsPK88NwL._SL1298_.jpg"},
    {store_id: 4, product_id: 35, stock: 84, unit_price: 16.14, product_name: "Arctic Char - Fresh, Whole", product_image: "https://images-na.ssl-images-amazon.com/images/I/81--CVLzgIL._SX522_.jpg"},
    {store_id: 4, product_id: 38, stock: 83, unit_price: 3.98, product_name: "Ham - Cooked Bayonne Tinned", product_image: "https://www.gourmetsleuth.com/images/default-source/dictionary/boneless-canned-ham.jpg?sfvrsn=2"},
    {store_id: 4, product_id: 44, stock: 2, unit_price: 12.03, product_name: "Veal - Slab Bacon", product_image: "https://schallerweber.com/wp-content/uploads/2017/06/50210-slab-bacon-in-package.jpg"},
    {store_id: 4, product_id: 61, stock: 23, unit_price: 11.02, product_name: "Bread - Sour Batard", product_image: "https://goodeggs4.imgix.net/54791441-326e-4efe-8edc-c1c974a9a062.jpg?w=840&h=525&fm=jpg&q=80&fit=cro"},
    {store_id: 4, product_id: 68, stock: 69, unit_price: 4.34, product_name: "Alfredo Sauce", product_image: "https://images.heb.com/is/image/HEBGrocery/000956878"},
    {store_id: 4, product_id: 76, stock: 74, unit_price: 11.25, product_name: "Hand Soap ", product_image: "https://cdn.shopify.com/s/files/1/0015/0683/6582/products/sku_120140_size_12floz_01.png?v=1617126495"},

]


export default class GroceryItems4 extends Component {
    render() {
        return <div id = "grocery-items">
            <>
                <Grid container justify='left' style={{
                    backgroundColor: '#EE6590', marginTop: '11vh'
                }}>
                    {GROCERY_ITEMS4.map((product) => (
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