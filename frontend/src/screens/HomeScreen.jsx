import { Fragment } from "react";
// React-bootstrap
import { Col, Row } from "react-bootstrap";

// Imported-components
// import products from "../products";
import Product from "../components/Product";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const { pageNumber } = useParams();
  
  const { data, isLoading, error } = useGetProductsQuery({ pageNumber });

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Fragment>
  );
};

export default HomeScreen;
