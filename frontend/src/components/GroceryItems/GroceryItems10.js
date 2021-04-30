import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { Link } from 'react-router-dom';

const GROCERY_ITEMS10 = [
    {store_id: 10, product_id: 3, stock: 4, unit_price: 1.62, product_name: "Bread Loafs", product_image: "https://assets.bonappetit.com/photos/5f84743360f032defe1f5376/3:2/w_1857,h_1238,c_limit/Pullman-Loaf"},
    {store_id: 10, product_id: 15, stock: 52, unit_price: 3.9, product_name: "Nut - Hazelnut, Whole", product_image: "https://www.mounthopewholesale.com/wp-content/uploads/2015/04/NFIL2.jpg"},
    {store_id: 10, product_id: 17, stock: 54, unit_price: 17.99, product_name: "Longos - Assorted Sandwich", product_image: "https://media.istockphoto.com/photos/sandwich-catering-platter-picture-id140463189"},
    {store_id: 10, product_id: 33, stock: 95, unit_price: 1.47, product_name: "Cabbage - Savoy", product_image: "https://www.rochs.com/store/west-greenwich/wp-content/uploads/sites/2/2020/06/GR1111.jpg"},
    {store_id: 10, product_id: 47, stock: 48, unit_price: 19.1, product_name: "Vinegar - White Wine", product_image: "https://images-na.ssl-images-amazon.com/images/I/61fcCV9TzoL._SL1500_.jpg"},
    {store_id: 10, product_id: 50, stock: 71, unit_price: 13.74, product_name: "Rolled Oats", product_image: "https://www.bobsredmill.com/media/catalog/product/cache/8646dbe0b50cb9bce8e481734e0f2ffe/1/3/1360s14"},
    {store_id: 10, product_id: 59, stock: 59, unit_price: 9.5, product_name: "Wine - Savigny - Les - Beaune", product_image: "https://cdn.shoplightspeed.com/shops/603808/files/24704766/savigny-les-beaune-les-pimentiers-2017-pe"},
    {store_id: 10, product_id: 64, stock: 86, unit_price: 18.19, product_name: "Potatoes - Pei 10 Oz", product_image: "https://www.peipotato.org/sites/default/files/2019-07/pic.jpg"},
    {store_id: 10, product_id: 89, stock: 24, unit_price: 12.03, product_name: "Lychee - Canned", product_image: "https://m.media-amazon.com/images/I/81WQW5T8CYL._SL1500_.jpg"},
    {store_id: 10, product_id: 94, stock: 84, unit_price: 17.4, product_name: "Brownies - Two Bite, Chocolate", product_image: "https://i5.peapod.com/c/5V/5VO4R.jpg"},
    {store_id: 10, product_id: 95, stock: 79, unit_price: 15.22, product_name: "Turnip - White", product_image: "https://media.ecotierra.es/product/nabo-blanco-ecologico-1-kg-800x800.jpg"},
]

export default class GroceryItems10 extends Component {
    render() {
        return <div id = "grocery-items">
            <>
                <Grid container justify='left' style={{
                    backgroundColor: '#EE6590', marginTop: '11vh'
                }}>
                    {GROCERY_ITEMS10.map((product) => (
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