import React from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { useState, useEffect } from 'react'

const GroceryProducts = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/groceryproducts/?format=json')
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                setProducts(resp)
            })

    }, [])
    return (
        <>
            <Grid container justify='center' spacing={3} style={{
                backgroundColor: '#EE6590',
            }}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default GroceryProducts;