import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import CarParts from '../CarParts/CarParts';
import Products from '../Products/Producs';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <CarParts></CarParts>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;