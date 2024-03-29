import { Fragment } from "react";
// React-bootstrap
import { Col, Row } from "react-bootstrap";

// Imported-components
import Product from "../components/Product.jsx";
import Paginate from "../components/Paginate.jsx";
import ProductCarousel from "../components/ProductCarousel.jsx";

import { useParams, Link } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice.js";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";

const HomeScreen = () => {
  const { keyword, pageNumber } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <Fragment>
       {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
      {
      isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error.data.message || error.error}
        </Message>
      ) : (
        <Fragment>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : " "}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default HomeScreen;
