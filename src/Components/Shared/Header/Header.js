import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img
                            src="https://demo.egenslab.com/html/tourx/assets/images/logo.png"
                            width="130"
                            className="d-inline-block align-top"
                            alt="logo"
                        />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="menu ms-auto my-2 mx-4 my-lg-0"

                        >
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/tour-packages">Tour Packages</Nav.Link>
                            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
                            {user?.email ? <NavDropdown title="Admin" id="basic-nav-dropdown">
                                {user?.email ? <NavDropdown.Item as={Link} to="/my-booking">My Bookings</NavDropdown.Item> : ''}
                                {user?.email ? <NavDropdown.Item as={Link} to="/manage-all-bookings">Manage All Bookings</NavDropdown.Item> : ''}
                                {user?.email ? <NavDropdown.Item as={Link} to="/add-new-package">Add new package</NavDropdown.Item> : ''}
                            </NavDropdown> : ''}

                        </Nav>
                        <div className="d-flex align-items-center">
                            <span>{user?.displayName}</span>
                            {user.email ? <button onClick={logOut} className='btn primary-bg-color shadow ms-3'>Logout</button> : <Link to='/login'><button className='btn primary-bg-color shadow'>Login/Register</button></Link>}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;