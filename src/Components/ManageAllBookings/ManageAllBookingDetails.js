import React from 'react';
import { Badge, ListGroup, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import UseUserOrders from '../../hooks/UseUserOrders';

const ManageAllBookingDetails = (props) => {
    // const [userOrders, setUserOrders] = useState([])
    // const [updateBookingStatus, setUpdateBookingStatus] = useState('Pending')
    const { isLoading, setIsLoading } = useAuth()
    const { _id, locationTitle, status, date, price } = props.userOrder
    // const statusUpdate = Object.values(userOrders)


    // CHECK USER BOOKING
    const { userOrders, setUserOrders } = UseUserOrders()

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

    const updateStatus = (id) => {
        const updateDatabase = { status: 'Completed' }

        // console.log(userOrders);

        fetch(`https://sleepy-atoll-70174.herokuapp.com/bookings/manage-all-bookings/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDatabase)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Status Completed')
                    setUserOrders(props.userOrder.status = 'Completed')
                    console.log(userOrders);
                }
            })
    }





    return (
        <>

            <div className='w-50 mx-auto shadow my-2'>

                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{locationTitle} - ${price}</div>
                        {date}
                    </div>
                    <Badge variant="primary" pill bg={status === 'Completed' ? 'success' : 'primary'}>
                        {status}
                    </Badge>

                    <Badge className='ms-2' bg="primary" variant="danger" pill>

                        <i style={{ cursor: 'pointer' }} title='Update status to complete' onClick={() => updateStatus(_id)} className="fas fa-check"></i>

                    </Badge>
                    <Badge className='ms-2' bg="danger" variant="danger" pill>

                        <i style={{ cursor: 'pointer' }} title='Delete' onClick={() => handleDelete(_id)} className="far fa-trash-alt"></i>

                    </Badge>

                </ListGroup.Item>


            </div>


        </>
    );
};

export default ManageAllBookingDetails;
