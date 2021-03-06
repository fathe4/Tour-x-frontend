import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleTourPackage = (props) => {
    const { location, price, day, description, img, rating, _id } = props.package
    console.log(day);
    return (
        <div>
            <Col>
                <Card className='border-0 shadow'>
                    <Card.Img variant="top" height='250' src={img} />
                    <Card.Body>
                        <div className='d-flex justify-content-between my-3'>
                            <h6>${price}/Per Person</h6>
                            <h6><i class="far fa-calendar-alt"></i> {day} Days/{parseInt(day) + 1} night</h6>
                        </div>
                        <Card.Title><i class="fas fa-map-marker-alt"></i> {location.slice(0, 35)}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 200)}.....
                        </Card.Text>
                        <div className='d-flex justify-content-between my-3  align-items-center'>
                            <h6><i class="fas fa-star primary-color"></i> {rating}+ Rating</h6>
                            <Link to={`/booking/${_id}`}><button className='btn primary-bg-color shadow'>Book Now</button></Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleTourPackage;