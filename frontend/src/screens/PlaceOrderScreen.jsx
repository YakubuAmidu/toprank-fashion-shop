import { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Row, Col, Button, Image, ListGroup, Card } from "react-bootstrap";
import CheckoutSteps from "../components/CheckOutSteps";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else {
      if (!cart.paymentMethod) {
        navigate("/payment");
      }
    }
  }, [cart.paymentMethod, cart.shippingAddress, navigate]);

  return (
    <Fragment>
      <CheckoutSteps step1 step2 step3 step4 />
    </Fragment>
  );
};

export default PlaceOrderScreen;
