import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AddProduct from '../../AddProduct/AddProduct';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import AddReview from '../../AddReview/AddReview';
import './Dashboard.css'
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const { user, logOut } = useAuth();

    const drawer = (
        <div>
            <img src={user.photoURL} alt={user.displayName}
                width="80"
                height="80"
                className="me-3 rounded-circle img-thumbnail shadow-sm" />
            <h6 className="fw-bold">{user.displayName}</h6>
            <Toolbar />
            <h6 className="text-secondary">Dashboard</h6>
            <Divider />
            <div className="vertical-nav">
                <Link to="/home" className="text-decoration-none">
                    <Button className="w-100">
                        <i className="fas fa-home me-3  fa-fw"></i>
                        Home
                    </Button>
                </Link>
                <Link to={`${url}/pay`} className="text-decoration-none">
                    <Button className="w-100">
                        <i className="fab fa-cc-amazon-pay  me-3 fa-fw"></i>
                        Pay
                    </Button>
                </Link>
                <Link to={`${url}/myOrders`} className="text-decoration-none">
                    <Button className="w-100 ">
                        <i className="fas fa-cart-plus me-3 text-primary fa-fw"></i>
                        My Orders
                    </Button>
                </Link>
                <Link to={`${url}/addReview`} className="text-decoration-none">
                    <Button className="w-100 ">
                        <i className="fas fa-comments me-3 fa-fw"></i>
                        Review
                    </Button>
                </Link>
                {
                    admin && <Box>
                        <Link to={`${url}/makeAdmin`} className="text-decoration-none">
                            <Button className="w-100">
                                <i className="fas fa-user-plus  me-3 fa-fw"></i>
                                Make Admin
                            </Button>
                        </Link>
                        <Link to={`${url}/addProduct`} className="text-decoration-none">
                            <Button className="w-100">
                                <i className="fas fa-plus  me-3 fa-fw"></i>
                                Add Product
                            </Button>
                        </Link>
                    </Box>
                }


                {user?.email ?
                    <Box>
                        <Link to="/" className="text-decoration-none">
                            <Button className="w-100" onClick={logOut}>
                                <i className="fas fa-sign-out-alt me-3 fa-fw"></i>
                                Logout
                            </Button>
                        </Link>
                    </Box> : {}}
            </div>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <Box sx={{ display: 'flex' }}>

            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}

                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>

            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/AddReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
