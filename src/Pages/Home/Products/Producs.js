import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('https://harrear.herokuapp.com/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    useEffect(() => {
        fetch('https://harrear.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (

        <div className="product">
            <div className="container ">
                <h1 className="text-primary fw-bolder bg-light w-100 py-5">OUR PRODUCT</h1>
                <div className="row mt-5" >
                    {
                        products.slice(0, 6).map(product =>

                        (
                            <div className="col-lg-4 col-md-6 col-sm-12 h-100">
                                <div className="m-2">
                                    <img className="w-100" src={product.img} alt="" />
                                    <div className="p-3 text-start bg-light">
                                        <h5>{product.name}</h5>
                                        <p>{product.description}</p>
                                        <h6>Product Price : ${product.price}</h6>
                                        <div className="text-center mt-3">
                                            <Link to={`/order/${product._id}`}>
                                                <button className="btn bg-primary text-white px-5 w-100 text-center">Order</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    );
};

export default Products;