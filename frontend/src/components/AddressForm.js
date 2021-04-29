import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormIn from './FormIn'
import { Link } from 'react-router-dom'

const AddressForm = ({ next }) => {
    const methods = useForm();

    return (
        <>
            <Typography variant='h6' gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods }>
                <form onSubmit={methods.handleSubmit((data) => next({ ...data }))}>
                    <Grid container spacing={3}>
                        <FormIn required name='firstName' label='First Name'/>
                        <FormIn required name='lastName' label='Last Name'/>
                        <FormIn required name='shippingAddress' label='Shipping Address'/>
                        <FormIn required name='city' label='City'/>
                        <FormIn required name='zipOrPostalCode' label='Zip/Postal Code'/>
                    </Grid>
                    <br />
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Button component={Link} to='/shoppingcart' variant="outlined">Back To Cart</Button>
                        <Button type='submit' variant='contained' color='primary'>Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
