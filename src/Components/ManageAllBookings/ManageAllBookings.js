import React from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import UseUserOrders from '../../hooks/UseUserOrders';
import ManageAllBookingDetails from './ManageAllBookingDetails';

const ManageAllBookings = () => {
    // const [userOrders, setUserOrders] = useState([])
    const { isLoading } = useAuth()
    // const findUserOrders = Object.values(user)

    // CHECK USER BOOKING
    // useEffect(() => {
    //     fetch('https://sleepy-atoll-70174.herokuapp.com/all-bookings')
    //         .then(res => res.json())
    //         .then(data => { setUserOrders(data) })
    //         .finally(() => setIsLoading(false))
    // }, [setIsLoading])
    const { userOrders } = UseUserOrders()


    // DELETE ANY BOOKING

    return (
        <div>
            <h2 className='text-center my-5'>Manage All Bookings</h2>
            <ListGroup as="ol" numbered>

                {
                    isLoading ? <Spinner className='mx-auto ' animation="border" variant="danger" /> : userOrders.map(userOrder => <ManageAllBookingDetails key={userOrder._id} userOrder={userOrder}></ManageAllBookingDetails>)
                }

            </ListGroup>
        </div>
    );
};

export default ManageAllBookings;