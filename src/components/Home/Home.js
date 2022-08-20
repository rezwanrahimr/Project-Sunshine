import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../FAQ/Faq';
import Footer from '../Footer/Footer';
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
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;