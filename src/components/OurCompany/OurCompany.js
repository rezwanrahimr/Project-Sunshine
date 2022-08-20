import React from 'react';
import company from './company.gif';

const OurCompany = () => {
    return (
        <div>
            <h1 className='fw-bold display-5 mt-5'>OUR COMPANY</h1>
            <div className='row'>
                <div className='col col-lg-6 d-flex justify-content-center align-items-center'>
                <p className='text-center mt-5 p-5 fs-5 '>To qualify as a tech company, a company has to make new technology (whether or not they sell it to an end user), use it to differentiate themselves, and be driven by the values of innovation and collaboration. Many companies now have to produce technology without necessarily relying on it for revenue</p>
                </div>
                <div className='col col-lg-6'>
                    <img src={company} alt="" />

                </div>

            </div>
        </div>
    );
};

export default OurCompany;