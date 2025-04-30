import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './Login';
import { NavLink } from 'react-router-dom';
import Register from './Register';

const Navbarr = () => {
  return (
    <div>




    <Navbar expand="lg" className="bg-body-tertiary py-3 shadow-sm">
      <Container>
        <NavLink className='Navbar.Brand fw-bold fs-4'
        to="/">
            Dressy boutique
            </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/products">products</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
            <Nav.Link to="/contact">Contact</Nav.Link>
            
           
              
        

          </Nav>
<div className='buttons'>
<NavLink to='./login.jsx' className='btn btn-outline-dark ' target='on_blank'>
    <i className='fa fa-login me-1'  ></i>Login</NavLink>
</div>
<div className='buttons'>
<NavLink to='./Register' className='btn btn-outline-dark ms-2 ' target='on_blank'>
    <i className='fa fa-login me-1'></i>Register
    </NavLink>
</div>
<div className='buttons'>
<NavLink to='../src/redux/store.js' className='btn btn-outline-dark ms-2' target='on_blank'>
    <i className='fa fa-login me-1'></i>Cart (0)</NavLink>
</div>  

        </Navbar.Collapse>


      </Container>
    </Navbar>













    </div>
  )
}

export default Navbarr





