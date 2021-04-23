import React from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product'
import { useState, useEffect } from 'react'

const GroceryProducts = (props) => {

    const [products, setProducts] = useState([]);
    var id = getParameter('id')

    function getParameter(parameterName) {
        let parameters = new URLSearchParams(window.location.search);
        return parameters.get(parameterName);
    }


    useEffect(() => {
        fetch('http://54.151.124.251:8000/groceryproducts/?id=' + id)
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                setProducts(resp)
            })

    })
    return (
        <>
            <Grid container justify='center' style={{
                backgroundColor: '#EE6590', marginTop: '11vh'
            }}>
                {products.map((product) => (
                    <Grid item key={product.product_id} xs={12} sm={6} md={4} lg={3} style={{ border: '10px solid #EE6590' }}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default GroceryProducts;