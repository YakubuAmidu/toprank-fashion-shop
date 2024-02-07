import { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckOutSteps";

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  return (
    <FormContainer>
      <h1>Payment Method</h1>
      <CheckoutSteps step1 step2 />

      <Form>
        <Form.Group>
          <Form.Label as="legent">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              className="my-2"
              label="Paypal or Credit Cart"
              id="Paypal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
