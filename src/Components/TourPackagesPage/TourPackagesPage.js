import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleTourPackage from '../TourPackages/SingleTourPackage';
import BreadCrumb from '../Breadcrumb/Breadcrumb';
import tourPackageImg from '../../images/tourPackagesPage.jpg'

const TourPackagesPage = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('https://sleepy-atoll-70174.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <>
            <BreadCrumb text='Tour Packages' img={tourPackageImg}></BreadCrumb>
            <div className='container'>
                <Row xs={1} md={3} className="my-5 g-4">

                    {packages.map(singlePackage => <SingleTourPackage key={singlePackage._id} package={singlePackage}></SingleTourPackage>)}

                </Row>
            </div>
        </>
    );
};

export default TourPackagesPage;