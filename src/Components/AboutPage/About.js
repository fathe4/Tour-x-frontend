import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './about.css'
import aboutUs from '../../images/aboutUs.jpg'
import BreadCrumb from '../Breadcrumb/Breadcrumb';

const About = () => {
    return (
        <>
            <BreadCrumb text='About Us' img={aboutUs}></BreadCrumb>
            <div className='about '>

                <Container>
                    <Row xs={1} md={2} className='d-flex justify-content-center align-items-center'>
                        <Col>
                            <h2 className='about-title'>About <i className='primary-color my-5 fw-bolder '>Tour</i> X</h2>
                            <h5 className='my-3 fw-bold'>We thrive on building a healthy and solid community for all individuals.</h5>
                            <p className='mt-4 lh-lg'>While traveling is an as aspiration for many people, the travel industry itself isn’t always an obvious career path.

                                Travel is, arguably, the world’s largest industry, encompassing a wide variety of economic activity, including airlines, restaurants, hotels, and attractions, along with the technology, marketing, public relations, etc. to support these organizations.

                                Like all industries, travel/tourism/hospitality needs to fill roles at all levels and functions:

                                Entry-level, like front desk staff, prep cooks, etc.
                                Management
                                Executive staff
                                Outside of more traditional career roles, the travel industry is replete with startups that seek to disrupt the status quo, providing entrepreneurial opportunities, as well.

                                We see diversifying the world of travel as needing both bottom-up and top-down approaches. You cannot encourage individuals to pursue roles that they aren’t going to be considered for, so it is just as important to us to work on increasing opportunities and awareness within the industry as it is to inspire people to join it.
                            </p>
                        </Col>
                        <Col >
                            <img width='750' className='mt-5 shadow about-img' src='https://images.unsplash.com/photo-1606820854416-439b3305ff39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80' alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;