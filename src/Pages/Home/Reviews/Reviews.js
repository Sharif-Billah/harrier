import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div class="reviews">
            <div className="container">
                <div class="row">
                    <h2>Explore the customer experience</h2>
                    {
                        reviews.map((review => (
                            <div class="col-lg-3 col-md-6">
                                <div class="card mt-4">
                                    <Rating
                                        emptySymbol="far fa-star icon"
                                        fullSymbol="fas fa-star icon"
                                        className="active-star"
                                        initialRating={review.rating}
                                        readonly
                                    />
                                    <div className="description">{review.description}</div>
                                    <div className="profile d-flex ft-4 mt-auto">
                                        <div>
                                            <img className="mt-3 me-2 img-fluid" src={review.image} alt="user" />
                                        </div>
                                        <div className="fs-3">
                                            <div className="name">{review.name}</div>

                                            <p className="text-muted email">{review.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )))
                    }
                </div>

            </div>
        </div>
    );
};

export default Reviews;