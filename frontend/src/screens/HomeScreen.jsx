import { useState, useEffect } from "react";

import axios from "axios";

import { Fragment } from "react";
// React-bootstrap
import { Col, Row } from "react-bootstrap";

// Imported-components
// import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:8000/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Fragment>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default HomeScreen;
