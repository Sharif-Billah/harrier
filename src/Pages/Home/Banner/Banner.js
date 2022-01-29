import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 text-start">
                        <h6 >WELLCOME TO HARRIER SHOP</h6>
                        <h1>MODERN-CLASSIC <br /> <span>INCREDIBLE</span></h1>
                        <p>GET 40% OF ON SELECTED ITEMS.</p>
                        <Link to="/product"><button className="btn px-3 py-2 mt-4" >MORE PRODUCT</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;