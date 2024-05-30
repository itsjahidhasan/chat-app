import { Alert, Button, Col, Form, Row, Stack } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <Form>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Register</h2>
              <Form.Control type="text" placeholder="Name"></Form.Control>
              <Form.Control type="text" placeholder="Name"></Form.Control>
              <Form.Control type="text" placeholder="Name"></Form.Control>
              <Button variant="primary" type="submit">
                Register
              </Button>

              <Alert variant="danger">
                <p>An error occured</p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
