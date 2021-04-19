import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { Done } from '@material-ui/icons'
import makeStyles from './GroceryStyles'
import { Link } from 'react-router-dom';


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
                    </div><Typography variant='body2' color='textSecondary'>
                        {store.description}
                    </Typography>
                    {/*  */}
                </CardContent>
                <CardActions disableSpacing ClassName={classes.cardActions}>
                    <IconButton aria-label='View store'>
                        <Link to={str} className={classes.navLinks} style={{
                            color: 'black',
                        }}>
                            View Store Page
                    </Link>
                        <Done />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default store
