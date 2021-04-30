import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { Link } from 'react-router-dom';

const GROCERY_ITEMS5 = [
    {store_id: 5, product_id: 11, stock: 9, unit_price: 19.81, product_name: "Bologna", product_image: "https://images-na.ssl-images-amazon.com/images/I/51%2BPRp9JzFL.jpg"},
    {store_id: 5, product_id: 16, stock: 87, unit_price: 11.37, product_name: "Flour - Semolina", product_image: "https://images-na.ssl-images-amazon.com/images/I/71vSzj0b7JL._SL1500_.jpg"},
    {store_id: 5, product_id: 26, stock: 73, unit_price: 6.52, product_name: "Bacardi Raspberry", product_image: "https://mahanliquor.com/wp-content/uploads/2019/07/bacardi-raspberry-rum-1L-600x600.jpeg"},
    {store_id: 5, product_id: 32, stock: 61, unit_price: 9.49, product_name: "Wine - White, Riesling, Semi - Dry", product_image: "https://cdn.shopify.com/s/files/1/0098/8613/8419/products/230703_d7acd9dc-64a5-4e8b-9d0a-5f46c4a4e3f"},
    {store_id: 5, product_id: 37, stock: 18, unit_price: 7.11, product_name: "Cocoa Powder - Natural", product_image: "https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/7/7/2776/cocoa-powder-natural-1"},
    {store_id: 5, product_id: 46, stock: 79, unit_price: 11.33, product_name: "Peas - Frozen", product_image: "https://i5.walmartimages.com/asr/5c808a27-a556-4bd0-bf33-5aa6358071df_4.7467591f04edc7663cb20a230d58"},
    {store_id: 5, product_id: 55, stock: 38, unit_price: 4.35, product_name: "Maruchan Chicken Flavor", product_image: "https://images.albertsons-media.com/is/image/ABS/960042051?$ecom-pdp-desktop$&defaultImage=Not_Avail"},
    {store_id: 5, product_id: 58, stock: 59, unit_price: 14.53, product_name: "Coffee - Decafenated", product_image: "https://images-na.ssl-images-amazon.com/images/I/91p%2BZ4woz9L._SL1500_.jpg"},
    {store_id: 5, product_id: 92, stock: 52, unit_price: 5.13, product_name: "Shrimp - 31/40", product_image: "https://images-na.ssl-images-amazon.com/images/I/61oxhQYC%2BjL._SL1500_.jpg"},
    {store_id: 5, product_id: 97, stock: 5, unit_price: 2.34, product_name: "Tart Shells - Sweet, 4", product_image: "https://gfwcdn.azureedge.net/images/Product/medium/tatin-round-tart-shells-sweet-1S-1177.jpg"},
]

export default class GroceryItems5 extends Component {
    render() {
        return <div id = "grocery-items">
            <>
                <Grid container justify='left' style={{
                    backgroundColor: '#EE6590', marginTop: '11vh'
                }}>
                    {GROCERY_ITEMS5.map((product) => (
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