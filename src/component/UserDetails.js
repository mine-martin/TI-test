import axios from 'axios';
import { React, useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import { useMatch } from 'react-router-dom';

const UserDetails = (props) => {
  const {
    params: { id },
  } = useMatch('user/:id');

  const [name, setName] = useState();
  const [occupation, setOccupation] = useState();
  const [bio, setBio] = useState();
  const [email, setEmail] = useState();

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(
          `https://ti-react-test.herokuapp.com/users/${id}`
        );
        setUser(result.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [id]);
  // console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .patch(`https://ti-react-test.herokuapp.com/users/${id}`, {
          name,
          occupation,
          bio,
          email,
        })
        .then((res) => {
          console.log(res);
          setName(res.name);
          setOccupation(res.occupation);
          setBio(res.bio);
          setEmail(res.email);
          // setLoading(false);

          function refreshPage() {
            window.alert('Updated Successfully');
            window.location.reload(false);
          }
          refreshPage();
        });
    } catch (err) {
      console.error(err.message);
    }
  };
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
            <Alert className="mt-2" style={{ background: '#e1e1e1' }}>
              Change User Info
            </Alert>

            <Form className="mt-3" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  defaultValue={user.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Occupation</Form.Label>
                <Form.Control
                  id="occupation"
                  type="text"
                  placeholder="Enter occupation"
                  defaultValue={user.occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  style={{ height: '15rem' }}
                  id="bio"
                  as="textarea"
                  placeholder="Enter bio"
                  defaultValue={user.bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>email</Form.Label>
                <Form.Control
                  id="email"
                  type="text"
                  placeholder="Enter email"
                  defaultValue={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Button
                type="submit"
                onClick={handleSubmit}
                variant="outline-secondary"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserDetails;
