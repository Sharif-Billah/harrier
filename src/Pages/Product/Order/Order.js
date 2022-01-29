import { Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';


const Order = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const initialInfo = { name: user.displayName, email: user.email, userImage: user.photoURL, phone: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setOrderInfo(newInfo);
    }

    const handleConfirmOrder = e => {
        // collect data
        const order = {
            ...orderInfo,
            productName: product.name,
            productPrice: product.price,
        }
        // send to the server
        fetch('https://harrear.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        e.preventDefault();
    }

    useEffect(() => {
        fetch(`https://harrear.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])

    return (
        <>
            <Navigation></Navigation>
            <div className="text-center container">
                <div className="row">
                    <div className="  col-lg-4 col-md-6 col-sm-12 tour  ">
                        <img className="w-100" src={product.img} alt="" />
                        <div className=" p-2 border bg-light ">
                            <div className="row pb-1">
                                <div className="col-8">
                                    <h5 className="fw-bold">{product.name} </h5>

                                </div>
                                <div className="col-4 text-end ">
                                    <h5 className="price fw-bolder">${product.price}</h5>
                                </div>
                            </div>
                            <p className="text-secondary">{product.description}</p>
                        </div>
                    </div>
                    <div className=" col-lg-6 col-md-6  col-sm-12">
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {product.name}

                        </Typography>
                        <form onSubmit={handleConfirmOrder}>
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                label={product.price}
                                variant="outlined"
                                size="small" />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                label={user.displayName}
                                name="name"
                                onBlur={handleOnBlur}
                                variant="outlined"
                                size="small" />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                label={user.email}
                                name="email"
                                onBlur={handleOnBlur}
                                variant="outlined"
                                size="small" />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                label="Phone Number"
                                name="phone"
                                onBlur={handleOnBlur}
                                variant="outlined"
                                size="small" />

                            <Link to="/dashBoard"><Button type="submit" variant="contained">Confirm Order</Button></Link>

                        </form>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Order;