import { Container, Grid, TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const { user, loginUser, isLoading, authError, signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }


    // const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history);
    }
    return (
        <Container>
            <Navigation></Navigation>

            <Grid >
                <form onSubmit={handleLoginSubmit}>
                    {isLoading && <Spinner animation="border" variant="danger" />}
                    <h2>Please Login</h2>
                    <TextField
                        sx={{ width: '60%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '60%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        variant="standard" />
                    <br />
                    <Button sx={{ width: '60%', m: 1, p: 1 }} type="submit" variant="contained">Login</Button>
                    <br />
                    <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text">New User? please Register</Button></NavLink>
                    {
                        user?.email && <Alert severity="success">User Created successfully!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }

                </form>

            </Grid>

            <h3 className="fw-bold">OR</h3>
            <button onClick={handleGoogleLogin} className="btn btn-primary w-25">Google Sign In</button>
        </Container>
    );
};

export default Login;