import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddNewPackage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://sleepy-atoll-70174.herokuapp.com/add-new-package', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('New package added')
                }
            })
        console.log(data)
    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center my-5'>Add new package</h2>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Tour Location
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control {...register("location")} type="text" placeholder="Tour Location" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Description
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control {...register("description")} as="textarea" type="text" placeholder="Tour Description" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Price
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control {...register("price")} type="number" placeholder="Price" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Days
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control {...register("day")} type="number" placeholder="Days" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Ratings
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control {...register("rating")} type="number" placeholder="Ratings" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Image
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control {...register("img")} type="url" placeholder="Image url" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">

                </Form.Group>



                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" className='btn primary-bg-color w-100'>Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default AddNewPackage;