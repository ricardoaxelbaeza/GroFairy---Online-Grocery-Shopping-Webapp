import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from './Review'

const stripePromise = loadStripe('...');

const PaymentForm = ({ cart, lastStep, nextStep }) => {
        
    const subtotal = () => {
        let subtotal = 0;
        cart.forEach (item => {
            subtotal = subtotal + (item.price * item.quantity)
        })
        return Math.round(subtotal * 100) / 100;
    }

    return (
        <>
            <Review cart={cart}/>
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
                                    Pay ${subtotal()}
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
