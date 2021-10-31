import React from 'react';
import { Carousel } from '3d-react-carousal';

const ReviewSlider = () => {
    const slides = [
        <img src="https://picsum.photos/1200/500/?random" alt="1" />,
        <img src="https://picsum.photos/1200/501/?random" alt="2" />,
        <img src="https://picsum.photos/1200/502/?random" alt="3" />,
        <img src="https://picsum.photos/1200/503/?random" alt="4" />,
        <img src="https://picsum.photos/1200/504/?random" alt="5" />];
    return (
        <div>
            <h2 className='text-center my-5'>Gallery</h2>
            <Carousel slides={slides} autoplay={false} interval={1000} />
        </div>
    );
};

export default ReviewSlider;