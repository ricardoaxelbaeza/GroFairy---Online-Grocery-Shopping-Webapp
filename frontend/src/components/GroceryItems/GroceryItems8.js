import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { Link } from 'react-router-dom';

const GROCERY_ITEMS8 = [
    {store_id: 8, product_id: 2, stock: 37, unit_price: 6.69, product_name: "Mushroom - Portebello", product_image: "https://cdn.shopify.com/s/files/1/0131/5055/2123/products/PEACHES-HALVES_1400x1400.jpg?v=1573980156"},
    {store_id: 8, product_id: 10, stock: 31, unit_price: 1.48, product_name: "Tomatoes - Cherry, Yellow", product_image: "https://cdn.shopify.com/s/files/1/1575/0603/products/CherryTomatoYellow_Approx.250g_800x.jpg?v=15996"},
    {store_id: 8, product_id: 18, stock: 93, unit_price: 5.74, product_name: "Kellogs All Bran Bars Chocolate", product_image: "https://store.belgianshop.com/5500-large_default/kellogg-s-all-bran-6x40g.jpg"},
    {store_id: 8, product_id: 22, stock: 32, unit_price: 16.95, product_name: "Cheese - Brick With Pepper", product_image: "https://www.meijer.com/content/dam/meijer/product/0071/92/8366/24/0071928366248_1_A1C1_1200.png"},
    {store_id: 8, product_id: 27, stock: 69, unit_price: 3.19, product_name: "Beyond Beef", product_image: "https://images-na.ssl-images-amazon.com/images/I/71nsPK88NwL._SL1298_.jpg"},
    {store_id: 8, product_id: 31, stock: 80, unit_price: 1.02, product_name: "Wine - Pinot Noir Pond Haddock", product_image: "https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/hce/h73/12205797802014.png"},
    {store_id: 8, product_id: 34, stock: 27, unit_price: 16.31, product_name: "Wine - Bouchard La Vignee Pinot", product_image: "https://images.vivino.com/thumbs/oxnHoubBSvqsVIIl54E8aw_pb_600x600.png"},
    {store_id: 8, product_id: 36, stock: 50, unit_price: 11.28, product_name: "Original Pringles", product_image: "https://target.scene7.com/is/image/Target/GUEST_c0f84587-a4cb-4c6f-ad4b-d7630dda858c?wid=488&hei=488"},
    {store_id: 8, product_id: 69, stock: 57, unit_price: 4.93, product_name: "Cheese - Cream Cheese", product_image: "https://sbfcdn.azureedge.net/media/0001523_philadelphia-cream-cheese-8-oz_600.jpeg"},
]


export default class GroceryItems8 extends Component {
    render() {
        return <div id = "grocery-items">
            <>
                <Grid container justify='left' style={{
                    backgroundColor: '#EE6590', marginTop: '11vh'
                }}>
                    {GROCERY_ITEMS8.map((product) => (
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




