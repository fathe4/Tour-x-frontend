import React from 'react';
import { Carousel } from '3d-react-carousal';

const ReviewSlider = () => {
    const slides = [
        <img width='1200px' height='600px' src="https://i.ibb.co/L9phDXY/elizeu-dias-SEq9dy-ZSe6c-unsplash.jpg" alt="1" />,
        <img width='1200px' height='600px' src="https://i.ibb.co/Gt6v59V/joshua-earle-87-Jy-Mb9-Zf-U-unsplash.jpg" alt="2" />,
        <img width='1200px' height='600px' src="https://i.ibb.co/86XGyRZ/alfred-aloushy-Ow-jo-AY8-Ny-Y-unsplash.jpg" alt="3" />,
        <img width='1200px' height='600px' src="https://i.ibb.co/mv9P4tT/jake-ingle-t-Za-A8-Vq-JG3g-unsplash.jpg" alt="4" />,
    ];
    return (
        <div style={{ margin: '120px 0' }}>
            <h2 className='text-center my-5'><span className='primary-color fw-bold'> TourX</span> Gallery</h2>
            <Carousel slides={slides} autoplay={false} interval={1000} />




        </div>
    );
};

export default ReviewSlider;