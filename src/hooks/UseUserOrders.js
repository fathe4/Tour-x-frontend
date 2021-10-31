import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from './useAuth';

const UseUserOrders = () => {
    const [userOrders, setUserOrders] = useState([])
    const { setIsLoading } = useAuth()

    useEffect(() => {
        fetch('https://sleepy-atoll-70174.herokuapp.com/all-bookings')
            .then(res => res.json())
            .then(data => { setUserOrders(data) })
            .finally(() => setIsLoading(false))
    }, [])


    return {
        userOrders,
        setUserOrders
    }
};

export default UseUserOrders;