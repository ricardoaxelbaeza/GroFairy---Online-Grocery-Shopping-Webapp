import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { Done } from '@material-ui/icons'
import makeStyles from './GroceryStyles'
import { Link } from 'react-router-dom';


const store = ({ store }) => {
    const classes = makeStyles();
    var random = getRandomInt(14);
    var str = "/StoreView/" + random;
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={store.image} title={store.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom>
                            {store.name}
                        </Typography>
                        <Typography variant='h5'>
                            {store.location}
                        </Typography>
                    </div>
                    <Typography variant='body2' color='textSecondary'>
                        {store.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing ClassName={classes.cardActions}>
                    <IconButton aria-label='View store'>
                        <Link to={str} className="nav-links" style={{
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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default store
