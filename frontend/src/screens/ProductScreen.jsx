// React-router-dom
import { useParams, Link } from "react-router-dom";

// React-fragment
import { Fragment } from "react";

// React-bootstrap
import { Col, Row, Image, ListGroup, Card, Button } from "react-bootstrap";

import Rating from "../components/Rating";
// import products from "../products";

import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";

const ProductScreen = () => {
  const { id: productId } = useParams();

  const {
    data: products,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  return (
    <Fragment>
      <Link className="btn btn-light my-3" to="/">
        Go back 👈
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
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
              <ListGroup.Item>
                Description: {products.description}
              </ListGroup.Item>
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
                        {products.countInStock > 0
                          ? "In Stock"
                          : "Out of Stock"}
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
      )}
    </Fragment>
  );
};

export default ProductScreen;
