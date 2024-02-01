// React-router-dom
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Axios
import axios from "axios";

// React-fragment
import { Fragment } from "react";

// React-bootstrap
import { Col, Row, Image, ListGroup, Card, Button } from "react-bootstrap";

import Rating from "../components/Rating";
// import products from "../products";

const ProductScreen = () => {
  const [products, setProduct] = useState({});

  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  return (
    <Fragment>
      <Link className="btn btn-light my-3" to="/">
        Go back 👈
      </Link>
      <Row>
        <Col md={5}>
          <Image src={products.image} alt={products.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{products.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={products.rating}
                text={`${products.numReviews} reviews!`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: $ {products.price}</ListGroup.Item>
            <ListGroup.Item>Description: {products.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>{products.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {products.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={products.countInStock === 0}
                >
                  Add to cart 👍
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProductScreen;
