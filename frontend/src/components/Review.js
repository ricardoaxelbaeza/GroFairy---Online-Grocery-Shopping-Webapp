import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const Review = ({cart}) => {
    const subtotalItem = (item) => {
        let subtotalItem = 0;
        subtotalItem = item.price * item.quantity
        return Math.round(subtotalItem * 100) / 100;;
    }
    return (
        <>
            <Typography variant='h6' gutterBottom>Order Summary</Typography>
            {cart.map((item) => (
                    <List disablePadding>
                
                    <ListItem style={{padding: '10px 0'}}>
                    <ListItemText primary={item.item} secondary={"Quantity: " + item.quantity}/>
                        <Typography variant='body2'>${subtotalItem(item)}</Typography>
                    </ListItem>
                </List>
                ))}
        </>
    )
}

export default Review
