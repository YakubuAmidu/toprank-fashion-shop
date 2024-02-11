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

const OrderScreen = () => {
  return (
    <div>
      <h1>Order Screen</h1>
    </div>
  );
};

export default OrderScreen;
