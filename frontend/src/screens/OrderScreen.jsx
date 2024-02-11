import { useParams, Link } from "react-router-dom";
import {
  Col,
  Row,
  Image,
  Button,
  ListGroup,
  Form,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useGetOrderDetailsQuery } from "../slices/ordersApiSlice";
import { Fragment } from "react";

const OrderScreen = () => {
  const { id: orderId } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger" />
  ) : (
    <Fragment>
      <h1>Order: {order._id}</h1>
      <Row>
        <Col md={8}>Column</Col>
        <Col md={4}>Column</Col>
      </Row>
    </Fragment>
  );
};

export default OrderScreen;
