import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

import toprankfashionshoplogo from '../assets/toprank-fashion.png';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">
            <img src={toprankfashionshoplogo} alt="Logo" className="logo" />
            Toprank-fashion-shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart" className="navbar-link">
                <FaShoppingCart className="fashoppingcart" />
                Cart
              </Nav.Link>
              <Nav.Link href="/login" className="navbar-link">
                <FaUser className="fauser" />
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
