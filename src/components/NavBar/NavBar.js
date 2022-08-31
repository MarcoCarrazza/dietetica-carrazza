import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return ( 
    <Navbar bg="primary" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="/">Healthy-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              {/* <NavLink to={'/'}>Todos los productos</NavLink> */}
              <NavDropdown.Item ><NavLink to={'/'}>Todos los productos</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to={'/category/cacaos'}>Cacaos</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to={'/category/cereales'}>Cereales</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to={'/category/barritas'}>Barritas</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to={'/category/frutos-secos'}>Frutos secos</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to={'/category/granolas'}>Granolas</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to={'/category/harinas'}>Harinas</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to={'/category/manies'}>Manies</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to={'/category/mermeladas'}>Mermeladas</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to={'/category/mixes'}>Mixes</NavLink></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
   );
}

export default NavBar;