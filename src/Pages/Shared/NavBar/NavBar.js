import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo.png';
import userPhoto from '../../../images/userPhoto.png';
import './NavBar.css';

const NavBar = () => {
    const [user] = useAuthState(auth);

    const handelLogout = () => {
        signOut(auth);
    }

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <div className='d-flex align-items-center justify-content-around'>
                        <h4 className='text-secondary'>Bike Hero</h4>
                        <img src={logo} alt="Logo" />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {
                            user ? <p className='pointer text-secondary fw-bold m-2' onClick={handelLogout}>Logout</p> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        {
                            user?.photoURL ? <img className='rounded-circle user-photo' src={user?.photoURL} alt="userPhoto" /> : <img className='mt-2 rounded-circle user-photo' src={userPhoto} alt="userPhoto" />
                        }
                        {
                            user && <p className='text-secondary m-2'>{user?.displayName}</p>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;