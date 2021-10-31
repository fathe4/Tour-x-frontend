import React from 'react';
import TourPackages from '../../TourPackages/TourPackages';
import Banner from '../Banner/Banner';
import ReviewSlider from '../ReviewSlider/ReviewSlider';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourPackages></TourPackages>
            <WhyUs></WhyUs>
            <ReviewSlider></ReviewSlider>
        </div>
    );
};

export default Home;