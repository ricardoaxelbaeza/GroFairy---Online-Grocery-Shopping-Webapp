import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import makeStyles from './GroceryStyles'
import { Link } from 'react-router-dom';
import { Button } from './Button'


const store = ({ store }) => {
    const classes = makeStyles();
    var str = "/groceryproducts/?id=" + store.store_id
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={store.store_image} title={store.store_name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom>
                            {store.store_name}
                        </Typography>
                        <Typography variant='h5'>
                            {store.store_address}
                        </Typography>
                    </div>
                        <Typography variant='body2' color='textSecondary'>
                            {store.description}
                        </Typography>
                    {/*  */}
                    <div style={{textAlign: 'center'}}>
                    <Button className='btns' buttonSize='btn--large' style={{margin: 'auto'}}>
                        <Link to={str} className={classes.navLinks} >
                            View Store Page
                        </Link>
                    </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default store
