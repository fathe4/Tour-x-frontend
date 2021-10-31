import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://demo.egenslab.com/html/tourx/assets/images/banners/banner-3.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className=''>

                        <h1>Amazing Tour In Paris Hill Tour</h1>
                        <h3 className='fw-bold'>6 Days/ 7 Nights</h3>
                        <button className='btn primary-bg-color'>Book Now</button>

                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://demo.egenslab.com/html/tourx/assets/images/banners/banner-1.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}

            </Carousel>
        </div>
    );
};

export default Banner;