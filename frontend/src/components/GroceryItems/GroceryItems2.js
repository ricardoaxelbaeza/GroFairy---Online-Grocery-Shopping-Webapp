import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { Link } from 'react-router-dom';



const GROCERY_ITEMS2 = [
    {store_id: 2, product_id: 8, stock: 73, unit_price: 11.3, product_name: "Muffin Hinge Container 6", product_image: "https://images-na.ssl-images-amazon.com/images/I/911YhTNSHbL._AC_SL1500_.jpg"},
    {store_id: 2, product_id: 10, stock: 66, unit_price: 18.62, product_name: "Tomatoes - Cherry, Yellow", product_image: "https://cdn.shopify.com/s/files/1/1575/0603/products/CherryTomatoYellow_Approx.250g_800x.jpg?v=15996"},
    {store_id: 2, product_id: 28, stock: 60, unit_price: 4.68, product_name: "Ham - Cooked Italian", product_image: "https://sc04.alicdn.com/kf/He6b7eb8e66e44bcfa88a41730cadcec3D.jpg"},
    {store_id: 2, product_id: 33, stock: 63, unit_price: 2.65, product_name: "Cabbage - Savoy", product_image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBcTFRQYFxcYHBgcGhoZGh4iFx0cISAeGiMjG"},
    {store_id: 2, product_id: 42, stock: 66, unit_price: 14.22, product_name: "Lobster", product_image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdH"},
    {store_id: 2, product_id: 47, stock: 47, unit_price: 18.17, product_name: "Vinegar - White Wine", },
    {store_id: 2, product_id: 55, stock: 24, unit_price: 8.35, product_name: "Maruchan Chicken Flavor", product_image: "https://images.albertsons-media.com/is/image/ABS/960042051?$ecom-pdp-desktop$&defaultImage=Not_Avail"},
    {store_id: 2, product_id: 56, stock: 35, unit_price: 2.5, product_name: "Sushi", product_image: "https://i.pinimg.com/originals/a4/e8/e4/a4e8e46f99aad141e5032f3b43c31fc6.jpg"},
    {store_id: 2, product_id: 67, stock: 48, unit_price: 1.76, product_name: "Wine - Red, Gamay Noir", },
    {store_id: 2, product_id: 79, stock: 51, unit_price: 7.12, product_name: "Mussels - Frozen", },
    {store_id: 2, product_id: 97, stock: 7, unit_price: 2.74, product_name: "Tart Shells - Sweet, 4", },
]

export default class GroceryItems2 extends Component {
    render() {
        return <div id = "grocery-items">
            <>
                <Grid container justify='left' style={{
                    backgroundColor: '#EE6590', marginTop: '11vh'
                }}>
                    {GROCERY_ITEMS2.map((product) => (
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