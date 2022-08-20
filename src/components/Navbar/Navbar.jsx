import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

const Navbarr = () => {
  return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">India Tourism</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Places to visit</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  

    
  )
}

export default Navbarr