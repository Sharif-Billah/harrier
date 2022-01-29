import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">

                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        HARRIER
                    </Typography>
                    <Link to="/home" className="text-decoration-none"><Button style={{ color: 'white' }}>Home</Button></Link>
                    <Link to="/product" className="text-decoration-none"><Button style={{ color: 'white' }}>More Product</Button></Link>
                    {user?.email ?
                        <Box>
                            <Link to="/dashboard" className="text-decoration-none"><Button style={{ color: 'white' }}>Dashboard</Button></Link>
                            <Link to="/" className="text-decoration-none"><Button className="btn-style text-white bg-success ms-3 p-2" onClick={logOut}>{user.displayName} Logout</Button> </Link>
                        </Box>
                        :
                        <Link to="/login" className="text-decoration-none"><Button style={{ color: 'white' }}>Login</Button></Link>}


                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;