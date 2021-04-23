import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

function SignUpConfirm() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'© '}
        <Link color="inherit" href="wing.png">
          Grofairy
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Login = (props) => {
    const useStyles = makeStyles((theme) => ({
        paper: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
        image: {
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'contain'
      },
      }));

    const[first_name, setFirstName] = useState()
    const[last_name, setLastName] = useState()
    const[date_of_birth, setDateOfBirth] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const[address, setAddress] = useState()
    const[phone_number, setPhoneNumber] = useState()
    
    const classes = useStyles();

    function handleSubmit(e) {
        e.preventDefault();
        console.log('First Name: ', first_name, 'Last Name: ', last_name, 'Date Of Birth: ', 
        date_of_birth, 'Email: ', email, 'Password: ', password, 'Address: ', address, 'Phone Number: ', phone_number);
        
        const data = { first_name, last_name, date_of_birth, email, password, address, phone_number };
        
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
            mode: 'cors',
            body: JSON.stringify(data)
        };
        fetch('http://54.151.124.251:8000/user/', requestOptions)
            .then(response => console.log(response));
    }
    
    return (
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <img className='logo-img' src='wing.png' alt='logo' />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="first_name"
                    label="First Name"
                    name="first_name"
                    value={first_name}
                    onInput={e=>setFirstName(e.target.value)}
                    autoComplete="first_name"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="last_name"
                    label="Last Name"
                    name="last_name"
                    value={last_name}
                    onInput={e=>setLastName(e.target.value)}
                    autoComplete="last_name"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="dob"
                    label="Date Of Birth"
                    name="date_of_birth"
                    value={date_of_birth}
                    onInput={e=>setDateOfBirth(e.target.value)}
                    autoComplete="date_of_birth"
                    autoFocus
                />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onInput={e=>setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                value={password}
                onInput={e=>setPassword(e.target.value)}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                value={address}
                onInput={e=>setAddress(e.target.value)}
                autoComplete="address"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phone_number"
                label="Phone Number"
                name="phone_number"
                value={phone_number}
                onInput={e=>setPhoneNumber(e.target.value)}
                autoComplete="phone_number"
                autoFocus
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <SignUpConfirm />
          </Box>
        </Container>
      );
}

export default Login;