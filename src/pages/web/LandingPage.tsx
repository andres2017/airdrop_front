import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container className="mt-5">
      {/* Header Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4">Welcome to Airdrop Info</h1>
          <p className="lead">Get the latest information on cryptocurrency airdrops.</p>
        </Col>
      </Row>

      {/* Airdrop Information Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">Latest Airdrops</h2>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Airdrop 1</Card.Title>
              <Card.Text>
                Details about Airdrop 1. How to participate, requirements, and rewards.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Airdrop 2</Card.Title>
              <Card.Text>
                Details about Airdrop 2. How to participate, requirements, and rewards.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
          {/* Add more airdrop cards as needed */}
        </Col>
      </Row>

      {/* Contact Section */}
      <Row className="text-center mb-5">
        <Col>
          <h2>Contact Us</h2>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;