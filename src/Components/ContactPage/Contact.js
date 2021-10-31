import React from 'react';
import BreadCrumb from '../Breadcrumb/Breadcrumb';
import './contact.css'
import contactImg from '../../images/contact.jpg'

const Contact = () => {
    return (
        <>
            <BreadCrumb text='Contact Us' img={contactImg}></BreadCrumb>
            <div className='container'>


                <div class="row row-cols-1 row-cols-md-2 g-4 py-5">
                    <form class="row g-3 shadow p-lg-5">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">First Name</label>
                            <input type="text" placeholder='Jhon' class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Last Name</label>
                            <input type="text" placeholder='due' class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-12">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" placeholder='example@gmail.com' class="form-control" id="inputEmail4" />
                        </div>

                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Subject</label>
                            <input type="text" placeholder='Your Subject' class="form-control" id="inputAddress" />
                        </div>
                        <div class="col-12">
                            <label for="floatingTextarea2">Comments</label>
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>

                        </div>


                        <div class="col-12">
                            <button type="submit" class="primary-bg-color btn w-100">Submit</button>
                        </div>
                    </form>
                    <div className="col ms-lg-3">
                        <div className='d-flex p-4 shadow'>
                            <i class="fas fa-search-location fs-3 pe-4 primary-color"></i>
                            <div>
                                <h4>Location</h4>
                                <p>USA, New York - 1060 Str. First Avenue 1</p>
                            </div>
                        </div>
                        <div className='d-flex p-4 shadow my-4'>
                            <i class="fas fa-phone-volume fs-3 pe-4 primary-color"></i>
                            <div>
                                <h4 >CALL CENTER</h4>
                                <span>24/7 Support</span><br />
                                <span>1800 567 8990 - 1800 345 454</span>
                            </div>
                        </div>
                        <div className='d-flex p-4 shadow my-4'>
                            <i class="fas fa-envelope-open-text fs-3 pe-4 primary-color"></i>
                            <div>
                                <h4>EMAIL US</h4>
                                <span>thememove@healsoul.com</span> <br />
                                <span>themesun@healsoul.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;