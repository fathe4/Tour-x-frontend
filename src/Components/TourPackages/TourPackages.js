import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import SingleTourPackage from './SingleTourPackage';
import useAuth from '../../hooks/useAuth';

const TourPackages = () => {
    const [packages, setPackages] = useState([])
    const { isLoading } = useAuth()
    useEffect(() => {
        fetch('https://sleepy-atoll-70174.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    const limitedPackage = packages.slice(0, 6)

    return (
        <div>
            <div className="container py-5">
                <div className=' text-center'>
                    <h5 className='primary-color fw-bold'>Choose Your Package</h5>
                    <h2 className="fw-bold mb-5">Select Your Best Package For Your Travel</h2>
                </div>
                <Row xs={1} md={3} className="g-4">

                    {isLoading ? <div className='d-flex justify-content-center' style={{ margin: '80px 0' }}>
                        <Spinner className='mx-auto' animation="border" variant="danger" />
                    </div>
                        : limitedPackage.map(singlePackage => <SingleTourPackage key={singlePackage._id} package={singlePackage}></SingleTourPackage>)}

                </Row>
            </div>
        </div>
    );
};

export default TourPackages;