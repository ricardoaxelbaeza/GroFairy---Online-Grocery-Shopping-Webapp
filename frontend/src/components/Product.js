import React from 'react'
import { Select, MenuItem, Button, Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core'
import makeStyles from './GroceryStyles'
import "./Product.css";

const Product = ({ product }) => {
    const classes = makeStyles();
    const [cart_id, setCartId] = React.useState(product.product_id);
    const [item, setItem] = React.useState(product.product_name);
    const [price, setPrice] = React.useState(product.unit_price);
    const [quantity, setQuantity] = React.useState();

    const handleSubmit = (event) => {
        var a = 3
        var b = "banana"
        var c = 32.43
        var d = 2
        const data = { cart_id, item, price, quantity};
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
        };

        fetch('http://127.0.0.1:8000/shoppingcart/', requestOptions)
        .then(response => response.json())
        .then(response => {
            console.log(response);
        });
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.product_image} title={product.product_id} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom value={product.product_name}>
                            {product.product_name}
                        </Typography>
                        <Typography variant='h5' value={product.unit_price}>
                            ${product.unit_price}
                        </Typography>
                    </div>
                    <Typography variant='body2' color='textSecondary' style={{fontSize: 'large'}}>
                            Status: {" "}
                            <span>
                                {product.stock > 0 ? "In stock" : "Out of stock"}
                            </span>
                        <p/>
                        <Button onClick={handleSubmit}>
                                 Add To Cart
                        </Button>
                        <div style={{fontSize: 'large'}}>
                            Quantity
                            <Select
                            labelId="quantity"
                            id="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            </Select>
   
                        </div>
                        
                    </Typography>
                    {/*  */}
                </CardContent>
                <CardActions disableSpacing ClassName={classes.cardActions}>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
