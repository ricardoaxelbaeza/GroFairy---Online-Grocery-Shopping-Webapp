import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { Link } from 'react-router-dom';

const GROCERY_ITEMS9 = [
    {store_id: 9, product_id: 5, stock: 45, unit_price: 11.47, product_name: "Pasta - Orecchiette", product_image: "https://images-na.ssl-images-amazon.com/images/I/81VHlJkvf6L._SL1500_.jpg"},
    {store_id: 9, product_id: 19, stock: 44, unit_price: 7.38, product_name: "Ecolab - Lime - A - Way 4/4 L", product_image: "https://catalog.nationalew.com/images/prdimgs/ECO/450/ECO6101131.JPG"},
    {store_id: 9, product_id: 26, stock: 40, unit_price: 1.73, product_name: "Bacardi Raspberry", product_image: "https://mahanliquor.com/wp-content/uploads/2019/07/bacardi-raspberry-rum-1L-600x600.jpeg"},
    {store_id: 9, product_id: 36, stock: 5, unit_price: 14.87, product_name: "Original Pringles", product_image: "https://target.scene7.com/is/image/Target/GUEST_c0f84587-a4cb-4c6f-ad4b-d7630dda858c?wid=488&hei=488"},
    {store_id: 9, product_id: 53, stock: 28, unit_price: 15, product_name: "Pure Cane Sugar Cubes", product_image: "https://www.kroger.com/product/images/large/right/0001580005012"},
    {store_id: 9, product_id: 55, stock: 91, unit_price: 13.5, product_name: "Maruchan Chicken Flavor", product_image: "https://images.albertsons-media.com/is/image/ABS/960042051?$ecom-pdp-desktop$&defaultImage=Not_Avail"},
    {store_id: 9, product_id: 57, stock: 40, unit_price: 19.9, product_name: "Dog Chow", product_image: "https://media.tractorsupply.com/is/image/TractorSupplyCompany/5048134?$456$"},
    {store_id: 9, product_id: 60, stock: 78, unit_price: 13.85, product_name: "Pastry - Mini French Pastries", product_image: "https://www.pastriesbyrandolph.com/wp-content/uploads/2019/06/small-mini-french-pastry-platter.jpg"},
    {store_id: 9, product_id: 68, stock: 49, unit_price: 18.2, product_name: "Alfredo Sauce", product_image: "https://images.heb.com/is/image/HEBGrocery/000956878"},
    {store_id: 9, product_id: 77, stock: 2, unit_price: 6.73, product_name: "Grenadine", product_image: "https://images-na.ssl-images-amazon.com/images/I/71cJvvR82nL._SL1500_.jpg"},
    {store_id: 9, product_id: 79, stock: 23, unit_price: 7.9, product_name: "Mussels - Frozen", product_image: "https://www.meijer.com/content/dam/meijer/product/0070/88/2014/88/0070882014884_1_A1C1_1200.png"},
    {store_id: 9, product_id: 82, stock: 38, unit_price: 4.68, product_name: "Cheese - Brie", product_image: "https://images.albertsons-media.com/is/image/ABS/137700155?$ecom-pdp-desktop$&defaultImage=Not_Avail"},
]


export default class GroceryItems9 extends Component {
    render() {
        return <div id = "grocery-items">
            <>
                <Grid container justify='left' style={{
                    backgroundColor: '#EE6590', marginTop: '11vh'
                }}>
                    {GROCERY_ITEMS9.map((product) => (
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