import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useMatch } from 'react-router-dom';

const UserDetails = (props) => {
  const {
    params: { id },
  } = useMatch('user/:id');

  const [name, setName] = useState('');
  const [occupation, setoccupation] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch(`https://ti-react-test.herokuapp.com/users/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUser(data);
    //     setLoading(false);
    //   });
    const getUser = async () => {
      try {
        const result = await axios.get(
          `https://ti-react-test.herokuapp.com/users/${id}`
        );
        setUser(result.data);

        setName(result.data.name);
        setoccupation(result.data.name);
        setBio(result.data.bio);
        setEmail(result.data.email);
      } catch (error) {
        console.log(error);
      }
      //   setLoading(false);
    };
    getUser();
  }, [id]);
  console.log(user.name);
  return (
    <div>
      <Container>
        <Row>
          <Col className="mt-5">
            <Card style={{ width: 'auto' }}>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle>{user.occupation}</Card.Subtitle>
                <Card.Text>{user.bio}</Card.Text>
                <Card.Link>{user.email}</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Form className="mt-3">
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
              {/* <Button
                type="submit"
                onClick={() => handleSubmit}
                variant="outline-secondary"
              >
                Submit
              </Button> */}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserDetails;
