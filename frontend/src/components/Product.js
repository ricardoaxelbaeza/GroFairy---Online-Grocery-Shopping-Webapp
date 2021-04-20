import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core'
import makeStyles from './GroceryStyles'

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
                    </div><Typography variant='body2' color='textSecondary'>
                        Available Stock: {product.stock}
                        <button>Add To Cart</button>
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
