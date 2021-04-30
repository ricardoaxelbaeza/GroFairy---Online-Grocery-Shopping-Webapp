import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { Link } from 'react-router-dom';

const GROCERY_ITEMS1 = [
    {store_id: 1, product_id: 3, stock: 52, unit_price: 4, product_name: "Bread Cranberry Foccacia", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 20, stock: 68, unit_price: 1.75, product_name: "Ecolab - Hobart Washarm End Cap", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 34, stock: 75, unit_price: 16.84, product_name: "Wine - Bouchard La Vignee Pinot", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 53, stock: 9, unit_price: 9.98, product_name: "Sugar - Cubes", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 56, stock: 17, unit_price: 3.97, product_name: "Roe - Flying Fish", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 59, stock: 41, unit_price: 6.42, product_name: "Wine - Savigny - Les - Beaune", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 60, stock: 3, unit_price: 9.81, product_name: "Pastry - Mini French Pastries", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 64, stock: 82, unit_price: 8.34, product_name: "Potatoes - Pei 10 Oz", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 66, stock: 16, unit_price: 6.37, product_name: "Cheese Cloth", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 68, stock: 74, unit_price: 6.2, product_name: "Pasta - Fett Alfredo, Single Serve", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 79, stock: 95, unit_price: 8.18, product_name: "Mussels - Frozen", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 80, stock: 83, unit_price: 12, product_name: "Cod - Fillets", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 93, stock: 13, unit_price: 4.93, product_name: "Beer - Rickards Red", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
]



export default class GroceryItems extends Component {
    render() {
        return <div id = "grocery-items">
            <>
                <Grid container justify='left' style={{
                    backgroundColor: '#EE6590', marginTop: '11vh'
                }}>
                    {GROCERY_ITEMS1.map((product) => (
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