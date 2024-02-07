import { Fragment } from "react";

// React-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React-bootstrap
import { Container } from "react-bootstrap";

// React-router-dom
import { Outlet } from "react-router-dom";

// Imported components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
