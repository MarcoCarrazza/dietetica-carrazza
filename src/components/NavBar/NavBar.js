import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return ( 
    <Navbar bg="primary" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="">Healthy-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Cacaos</NavDropdown.Item>
              <NavDropdown.Item href="">Cereales</NavDropdown.Item>
              <NavDropdown.Item href="">Barritas</NavDropdown.Item>
              <NavDropdown.Item href="">Frutos secos</NavDropdown.Item>
              <NavDropdown.Item href="">Granolas</NavDropdown.Item>
              <NavDropdown.Item href="">Harinas</NavDropdown.Item>
              <NavDropdown.Item href="">Manies</NavDropdown.Item>
              <NavDropdown.Item href="">Mermeladas</NavDropdown.Item>
              <NavDropdown.Item href="">Mixes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
   );
}

export default NavBar;