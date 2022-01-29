import { Grid, Typography } from '@mui/material';
import React from 'react';
import MyOrders from '../MyOrders/MyOrders';

const DashboardHome = () => {
    return (
        <Typography paragraph>
            <Grid container >
                <Grid item xs={12}>
                    <MyOrders></MyOrders>
                </Grid>
            </Grid>
        </Typography>
    );
};

export default DashboardHome;