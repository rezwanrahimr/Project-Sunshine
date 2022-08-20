import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import OurCompany from '../OurCompany/OurCompany';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Service></Service>
            <OurCompany></OurCompany>
        </div>
    );
};

export default Home;