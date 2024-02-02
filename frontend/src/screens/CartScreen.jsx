import {
  Col,
  Row,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: "20px" }}>Shopping cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/cart">Go back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">Items</ListGroup>
        )}
      </Col>
    </Row>
  );
};

export default CartScreen;
