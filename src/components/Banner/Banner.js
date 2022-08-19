import React from 'react';
import css from './Banner.css';
import banner from './banner.jpg';

const Banner = () => {
    return (
        <div className='banner-section'>
            <img id='imgg' src={banner} alt="" />
            <div className='hello'>
                <h1 className='text-Secondary display-1 fw-bold'>GET YOUR POSITION IN OUR COMPANY</h1>
            </div>
        </div>
    );
};

export default Banner;