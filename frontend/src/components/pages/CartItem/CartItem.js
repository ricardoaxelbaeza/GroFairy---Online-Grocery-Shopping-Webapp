  
import './CartItem.css';
import {Link} from 'react-router-dom';
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from "@material-ui/core";
import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQuantity, onRemoveFromCart }) => {
    const classes = useStyles();

    const handleUpdateCartQty = (cart_id, newQuantity) => {
        onUpdateCartQuantity(cart_id, newQuantity)
    }

    const handleRemoveFromCart = (cart_id) => {
        onRemoveFromCart(cart_id)
    }

    return (
        <Card>
            <CardMedia alt={item.item} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">
                    {item.item}
                </Typography>
                <Typography variant="h5">
                    {item.price}
                </Typography>
            </CardContent>
            <CardActions>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.cart_id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.cart_id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.cart_id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem