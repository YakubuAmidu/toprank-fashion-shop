// React-bootstrap
import { Navbar, Nav, Badge, Container } from "react-bootstrap";

// React-router-bootstrap
import { LinkContainer } from "react-router-bootstrap";

import { useSelector } from "react-redux";

// React-icons
import { FaShoppingCart, FaUser } from "react-icons/fa";

// Logo
import toprankfashionshoplogo from "../assets/toprank-fashion-shop.png";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-brand">
              <img src={toprankfashionshoplogo} alt="Logo" className="logo" />
              Toprank-fashion-shop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart" className="navbar-link">
                <Nav.Link href="/cart">
                  <FaShoppingCart className="fashoppingcart" />
                  Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login" className="navbar-link">
                <Nav.Link>
                  <FaUser className="fauser" />
                  Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
