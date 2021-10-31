import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner'

const Banner = () => {
    return (
        <div>
            <Carousel fade>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://demo.egenslab.com/html/tourx/assets/images/banners/banner-1.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='fw-bold'>Get Your Tour From us</h1>
                        <p className='fw-bold'>Tour X is the best platform for tourism</p>
                        <Link to='/tour-packages'><button className='btn primary-bg-color'>Check Our Tour packages</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://demo.egenslab.com/html/tourx/assets/images/banners/banner-3.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='fw-bold'>We are the trusted tourism agents</h1>
                        <p className='fw-bold'>Get your best tour ever from us</p>
                        <Link to='/tour-packages'><button className='btn primary-bg-color'>Check Our Tour packages</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;