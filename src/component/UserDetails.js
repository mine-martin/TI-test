import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

function UserDetails() {
  return (
    <div>
      <Container>
        <Row>
          {/* <Col>
            <Card>
              <Card.Title>name</Card.Title>
              <Card.Subtitle>occupation</Card.Subtitle>
              <Card.Text>bio</Card.Text>
              <Card.Link href="#">email</Card.Link>
            </Card>
          </Col> */}
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control id="name" type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Occupation</Form.Label>
                <Form.Control
                  id="occupation"
                  type="text"
                  placeholder="Enter occupation"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Bio</Form.Label>
                <Form.Control id="bio" type="text" placeholder="Enter bio" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>email</Form.Label>
                <Form.Control
                  id="email"
                  type="text"
                  placeholder="Enter email"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserDetails;
