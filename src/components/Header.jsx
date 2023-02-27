import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../images/hippo.png";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      className='style-nav'
      expand='lg'
      bg='darl'
      variant='dark'
    >
      <Container>
        <Navbar.Brand href='/'>
          <h1 id='navBarTitle'>
            <img
              className='navBarLogo'
              src={logo}
              width='40'
              height='50'
              alt='logo'
            />
            <span className='logoTitle'>Hungry Hungry Little One</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav>
            <Nav.Link href='/log'>Log</Nav.Link>
            <Nav.Link eventKey={2} href='stats'>
              Stats
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
