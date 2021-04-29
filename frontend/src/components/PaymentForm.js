import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from './Review'

const stripePromise = loadStripe('...');

const PaymentForm = ({ lastStep, nextStep }) => {
    return (
        <>
            <Review/>
            <Divider/>
            <Typography variant='h6' gutterBottom style={{margin: '20px 0'}}>Payment Method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe}) => (
                        <form>
                            <CardElement />
                            <br/>
                            <br/>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Button variant='outlined' onClick={lastStep}> Back</Button>
                                <Button variant='contained' onClick={nextStep} disabled={!stripe} color='primary'>
                                    Pay $50
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}

export default PaymentForm
