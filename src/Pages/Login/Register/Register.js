import { Grid, TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Navigation></Navigation>

            <Grid >
                {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <h2>Please Register</h2>
                    <TextField
                        sx={{ width: '60%', m: 1 }}
                        id="standard-basic"
                        label="Your Name"
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '60%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '60%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '60%', m: 1 }}
                        id="standard-basic"
                        label="Confirm Your Password"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <br />
                    <Button sx={{ width: '60%', m: 1, p: 1 }} type="submit" variant="contained">Register</Button>
                    <br />
                    <NavLink style={{ textDecoration: 'none' }} to="/login"><Button variant="text">Already Registered? please Login</Button></NavLink>

                </form>}
                {isLoading && <Spinner animation="border" variant="danger" />}
                {
                    user?.email && <Alert severity="success">User Created successfully!</Alert>
                }
                {
                    authError && <Alert severity="error">{authError}</Alert>
                }
            </Grid>
        </Container>
    );
};

export default Register;