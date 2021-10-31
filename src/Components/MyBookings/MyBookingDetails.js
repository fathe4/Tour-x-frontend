import React, { useEffect, useState } from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBookingDetails = (props) => {
    const [userOrders, setUserOrders] = useState([])
    const { setIsLoading } = useAuth()
    const { _id, locationTitle, status, date, price } = props.userOrder


    // CHECK USER BOOKING
    useEffect(() => {
        fetch('https://sleepy-atoll-70174.herokuapp.com/all-bookings')
            .then(res => res.json())
            .then(data => { setUserOrders(data) })
            .finally(() => setIsLoading(false))
    }, [])



    // DELETE ANY BOOKING

    const handleDelete = (id) => {
        setIsLoading(true)
        fetch(`https://sleepy-atoll-70174.herokuapp.com/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('DELETED')
                    const remainingUser = userOrders.filter(order => order._id !== id)
                    setUserOrders(remainingUser)
                }
            }).finally(() => setIsLoading(false))

    }





    return (
        <div className='container   my-2'>

            <ListGroup.Item
                as="li"
                className="d-flex shadow justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{locationTitle} - ${price}</div>
                    {date}
                </div>
                <Badge variant="primary" pill>
                    {status}
                </Badge>

                <Badge className='ms-2' bg="danger" variant="danger" pill>

                    <i style={{ cursor: 'pointer' }} title='Delete' onClick={() => handleDelete(_id)} className="far fa-trash-alt"></i>

                </Badge>

            </ListGroup.Item>


        </div>
    );
};

export default MyBookingDetails;
