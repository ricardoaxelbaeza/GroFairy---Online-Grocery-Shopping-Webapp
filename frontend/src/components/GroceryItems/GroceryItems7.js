import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { Link } from 'react-router-dom';

const GROCERY_ITEMS7 = [
    {store_id: 7, product_id: 5, stock: 5, unit_price: 2.32, product_name: "Pasta - Orecchiette", product_image: "https://images-na.ssl-images-amazon.com/images/I/81VHlJkvf6L._SL1500_.jpg"},
    {store_id: 7, product_id: 12, stock: 6, unit_price: 12.59, product_name: "Sobe - Orange Carrot", product_image: "https://www.kroger.com/product/images/xlarge/front/0073951040000"},
    {store_id: 7, product_id: 17, stock: 62, unit_price: 9.05, product_name: "Longos - Assorted Sandwich", product_image: "https://media.istockphoto.com/photos/sandwich-catering-platter-picture-id140463189"},
    {store_id: 7, product_id: 19, stock: 85, unit_price: 3.22, product_name: "Ecolab - Lime - A - Way 4/4 L", product_image: "https://catalog.nationalew.com/images/prdimgs/ECO/450/ECO6101131.JPG"},
    {store_id: 7, product_id: 34, stock: 8, unit_price: 10.85, product_name: "Wine - Bouchard La Vignee Pinot", product_image: "https://images.vivino.com/thumbs/oxnHoubBSvqsVIIl54E8aw_pb_600x600.png"},
    {store_id: 7, product_id: 37, stock: 73, unit_price: 2.45, product_name: "Cocoa Powder - Natural", product_image: "https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/7/7/2776/cocoa-powder-natural-1"},
    {store_id: 7, product_id: 76, stock: 98, unit_price: 13.75, product_name: "Hand Soap ", product_image: "https://cdn.shopify.com/s/files/1/0015/0683/6582/products/sku_120140_size_12floz_01.png?v=1617126495"},
    {store_id: 7, product_id: 79, stock: 36, unit_price: 14.03, product_name: "Mussels - Frozen", product_image: "https://www.meijer.com/content/dam/meijer/product/0070/88/2014/88/0070882014884_1_A1C1_1200.png"},
]



export default class GroceryItems7 extends Component {
    render() {
        return <div id = "grocery-items">
            <>
                <Grid container justify='left' style={{
                    backgroundColor: '#EE6590', marginTop: '11vh'
                }}>
                    {GROCERY_ITEMS7.map((product) => (
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