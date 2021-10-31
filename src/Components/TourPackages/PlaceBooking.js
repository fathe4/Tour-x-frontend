import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import BreadCrumb from '../Breadcrumb/Breadcrumb';

const PlaceBooking = () => {
    const [packageOffer, setPackageOffer] = useState({})
    const { user } = useAuth()
    const { packageId } = useParams()

    // FIND PACKAGE
    useEffect(() => {
        fetch('https://sleepy-atoll-70174.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                const findPackage = data.find(packageDetail => packageDetail._id === packageId)
                setPackageOffer(findPackage)
            })
    }, [packageId])

    // BOOKING FORM
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const locationRef = useRef()




    const onSubmit = data => {
        data.locationTitle = locationRef.current.value
        data.status = 'Pending'
        data.price = packageOffer.price
        data.userEmail = user.email
        console.log(data);
        fetch(`https://sleepy-atoll-70174.herokuapp.com/packages/bookings/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {

                if (result.insertedId) {
                    alert('Booking Success')
                    reset()
                }
            })

    };

    // console.log(locationRef.current.value);

    return (
        <>
            <BreadCrumb text={packageOffer.location} img={packageOffer?.img}></BreadCrumb>
            <div className='container  mt-5'>

                <div className="row">
                    <div className="col">
                        <Card className='border-0 shadow'>
                            <Card.Img variant="top" height='250' src={packageOffer?.img} />
                            <Card.Body>
                                <div className='d-flex justify-content-between my-3'>
                                    <h6>${packageOffer.price}/Per Person</h6>
                                    <h6><i class="far fa-calendar-alt"></i> {packageOffer.day} Days/{parseInt(packageOffer.day) + 1} night</h6>
                                </div>
                                <Card.Title><i class="fas fa-map-marker-alt"></i> {packageOffer.location}</Card.Title>
                                <Card.Text>
                                    {packageOffer.description}
                                </Card.Text>
                                <div className='d-flex justify-content-between my-3  align-items-center'>
                                    <h6><i class="fas fa-star primary-color"></i> {packageOffer.rating}+ Rating</h6>

                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-floating mb-3">
                                <input type="text" {...register("name")} class="form-control" id="floatingPassword" defaultValue={user.displayName} required />
                                <label for="floatingPassword">Your Full Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" {...register("email")} class="form-control" id="floatingInput" placeholder="name@example.com" defaultValue={user.email} required />
                                <label for="floatingInput">Your Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="number" {...register("number")} class="form-control" id="floatingInput" required />
                                <label for="floatingInput">Phone</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" {...register("address")} class="form-control" id="floatingInput" required />
                                <label for="floatingInput">Address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" ref={locationRef} class="form-control" id="floatingInput" defaultValue={packageOffer.location} required />
                                <label for="floatingInput">Package Name</label>
                            </div>
                            {/* <div class="form-floating mb-3">
                    <input type="text" {...register("packageName")} class="form-control" id="floatingInput" defaultValue={packageOffer.location} required />
                    <label for="floatingInput">Package Name</label>
                </div> */}

                            <div class="form-floating mb-3">
                                <input type="date" {...register("date")} class="form-control" id="floatingInput" required />
                                <label for="floatingInput">Dd-Mm-Yy</label>
                            </div>

                            <div class="form-floating mb-3">
                                <textarea row='10' {...register("message")} class="form-control" id="floatingInput" />
                                <label for="floatingInput">Message</label>
                            </div>
                            {errors.packageName && <span>This field is required</span>}
                            <button type='submit' className='btn primary-bg-color w-100'>Book Now</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaceBooking;