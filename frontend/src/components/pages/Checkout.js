import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from '../CheckoutStyles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import { Link } from 'react-router-dom'

const steps = ['Home Address', 'Payment Details']

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();
    const [shippingData, setShippingData] = useState({});

    const Confirmation = () => (
        <div style={{textAlign: 'center'}}>
            Thank you, please wait up to 20 minutes for your order to be delivered!
            <Divider/>
            <br />
            <br />
            <Button component={Link} to='/' variant="contained" color='primary'>Back To Homepage</Button>
        </div>
    )

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const lastStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    const Form = () => activeStep === 0
        ? <AddressForm next={next}/>
        : <PaymentForm lastStep={lastStep} nextStep = {nextStep}/>
    
    return (
        <>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center'>Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    { activeStep === steps.length ? <Confirmation /> : <Form /> }
                </Paper>
            </main>
        </>
    )
}

export default Checkout