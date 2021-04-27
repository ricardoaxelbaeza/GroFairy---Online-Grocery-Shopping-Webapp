import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const Review = () => {
    return (
        <>
            <Typography variant='h6' gutterBottom>Order Summary</Typography>
            <List disablePadding>
                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText primary="Banana Split" secondary="Quantity: 2"/>
                    <Typography variant='body2'>$50</Typography>
                </ListItem>
                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText primary="Total: $50"/>
                    <Typography variant='subtitle1' style={{fontWeight: '700'}}></Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review
