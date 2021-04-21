import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core'
import makeStyles from './GroceryStyles'
import "./ProductScreen.css";
import { AddToCart } from './actions/CartActions';

const product = ({ product }) => {
    const classes = makeStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.product_image} title={product.product_id} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom>
                            {product.product_name}
                        </Typography>
                        <Typography variant='h5'>
                            ${product.unit_price}
                        </Typography>
                        <Typography variant='h5' color ="textSecondary">{product.description}</Typography>
                    </div><Typography variant='body2' color='textSecondary'>
                        <p>
                            Status: {" "}
                            <span>
                                {product.stock > 0 ? "In stock" : "Out of stock"}
                            </span>
                        </p>
                        <p>
                            Qty
                            <select>
                                <option value = "1">1</option>
                                <option value = "2">2</option>
                                <option value = "3">3</option>
                                <option value = "4">4</option>
                            </select>
                        
                        <button>Add To Cart</button>
                        </p>
                    </Typography>
                    {/*  */}
                </CardContent>
                <CardActions disableSpacing ClassName={classes.cardActions}>
                </CardActions>
            </Card>
        </div>
    )
}

export default product
/*
<select value = {qty} onChange{(e) => setQty(e.target.value)}> this is gonna be used to get how many of the product they want to buy
    {[...Array(product.stock).keys()].map((x) => {
        <option> key={x+1} value={x+1}>{x+1}</option>
    })}
</select>
*/