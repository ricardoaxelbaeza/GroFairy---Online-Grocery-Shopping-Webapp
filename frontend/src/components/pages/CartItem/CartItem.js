  
import './CartItem.css';
import {Link} from 'react-router-dom';
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from "@material-ui/core";
import useStyles from './styles';
import Item from 'antd/lib/list/Item';

const CartItem = ({ item }) => {
    const classes = useStyles();
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
                    <Button type="button" size="small">-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small">+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem