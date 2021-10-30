import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const UserBookings = () => {
    const [userOrders, setUserOrders] = useState({})
    const { user } = useAuth()
    const findUserOrders = Object.values(user)

    useEffect(() => {
        fetch('http://localhost:5000/my-bookings/userEmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(findUserOrders)
        })
            .then(res => res.json())
            .then(data => setUserOrders(data))
    }, [])

    console.log(userOrders)
    return (
        <div>
            <h2>My Bookings</h2>

        </div>
    );
};

export default UserBookings;