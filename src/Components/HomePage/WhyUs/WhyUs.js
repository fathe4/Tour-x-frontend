import React from 'react';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <div className='whyUs text-center py-5'>
            <h5 className='primary-color fw-bold'>Why TourX</h5>
            <h2>Why You Are Travel With Tour x</h2>
            <div className='my-5'>
                <div className="container">

                    <div className='row '>
                        <div className="col">
                            <div className="card text-center py-5 px-2 text-white shadow" style={{ backgroundColor: '#315048' }}>
                                <i class="fas fa-user-tie fs-1 text-white py-3"></i>
                                <h3 className=''>2000+ Our worldwide guide</h3>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-center py-5 px-2 text-white shadow" style={{ backgroundColor: '#315048' }}>
                                <i class="fas fa-user-shield fs-1 text-white py-3"></i>
                                <h3 className=''>100% trusted travel agency</h3>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-center py-5 px-2 text-white shadow" style={{ backgroundColor: '#315048' }}>
                                <i class="fas fa-user-check fs-1 text-white py-3"></i>
                                <h3 className=''>10+ year of travel experience</h3>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-center py-5 px-2 text-white shadow" style={{ backgroundColor: '#315048' }}>
                                <i class="far fa-smile-beam fs-1 text-white py-3"></i>
                                <h3 className=''>90% of our traveller happy</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;