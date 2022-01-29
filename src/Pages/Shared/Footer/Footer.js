import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <div class="bg-dark text-white footer">
                <div class="container">
                    <div class="row  text-start ">
                        <div class="col-lg-3 col-md-6 mt-2">
                            <div>
                                <h2>SHOWROOM</h2>
                                <br />
                                <p>KlbTheme, 789 Main rd, Anytown,
                                    CA 12345 USA</p>
                                <p>Phone:  +387648592568</p>
                                <p>Location: Eighth Avenue 487, New York</p>
                                <p>Email: Harrier@klbtheme.com</p>
                                <p>Mon – Fri : 09am to 06pm</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6  mt-2">
                            <div>
                                <h2>QUICK LINKS</h2>
                                <br />
                                <p>Blog</p>
                                <p>FAQs</p>
                                <p>Payment</p>
                                <p>Shipment</p>
                                <p>Where is my order</p>
                                <p>Return Policy</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mt-2">
                            <div>
                                <h2>STYLE ADVISOR</h2>
                                <br />
                                <p>My account</p>
                                <p>Information</p>
                                <p>Adderss</p>
                                <p>Discount</p>
                                <p>Orders History</p>
                                <p>Additional Information</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mt-2">
                            <div>
                                <h2>INFORMATION</h2>
                                <br />
                                <p>Site Map</p>
                                <p>Search Terms </p>
                                <p>Advanced Search</p>
                                <p>About Us</p>
                                <p>Contuct Us</p>
                                <p>Suppliers</p>
                            </div>
                        </div>
                        <hr />
                        <p className="text-info text-center p-5">&copy; 2021 KlbTheme. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;