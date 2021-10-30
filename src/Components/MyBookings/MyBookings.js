import React, { useEffect, useState } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyBookingDetails from './MyBookingDetails';

const UserBookings = () => {
    const [userOrders, setUserOrders] = useState([])

    const { user, isLoading, setIsLoading } = useAuth()
    const findUserOrders = Object.values(user)

    // CHECK USER BOOKING
    useEffect(() => {
        fetch('http://localhost:5000/my-bookings/userEmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(findUserOrders)
        })
            .then(res => res.json())
            .then(data => {

                setUserOrders(data)
            })
            .finally(() => setIsLoading(false))

    }, [])

    //  console.log(user)
    return (
        <div>
            <h2 className='text-center my-4'>My Bookings</h2>
            <ListGroup as="ol" numbered>

                {
                    isLoading ? <Spinner className='mx-auto ' animation="border" variant="danger" /> : userOrders?.map(userOrder => <MyBookingDetails key={userOrder._id} userOrder={userOrder}></MyBookingDetails>)
                }

            </ListGroup>
        </div>
    );
};

export default UserBookings;