import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import './breadcrumb.css'

const BreadCrumb = ({ text, img }) => {
    return (
        <div>
            {/* Breadcrumb */}

            <div class="my-container">
                <div className="container">
                    <h1 className='fw-bold breadcrumb-text'> {text}</h1>
                    <Breadcrumb >
                        <Breadcrumb.Item className='text-white' href="/home">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>{text}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <img src={img} alt='' />
            </div>
        </div>
    );
};

export default BreadCrumb;