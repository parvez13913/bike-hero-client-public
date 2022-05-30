import React from 'react';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import OurPartner from '../OurPartner/OurPartner';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Reviews />
            <OurPartner></OurPartner>
        </div>
    );
};

export default Home;