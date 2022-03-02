import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserLists = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useState(' ');
  const history = useNavigate();

  useEffect(() => {
    fetch(`https://ti-react-test.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
        // console.log(data);
      })
      .catch((err) => console.error(err.message));
  }, [user]);

  const handleClick = (id) => {
    history(`user/${id}`);
  };

  return (
    <div>
      <Container className="mt-5 mb-5">
        {!loading && users === 0 && (
          <h3 className="text-6xl text-center mx-auto mt-32">
            No users in the database
          </h3>
        )}

        {loading ? (
          //   <h3 className="text-6xl text-center mx-auto mt-32">...Loading</h3>
          <Spinner className="ml-auto" animation="grow" variant="success" />
        ) : (
          <>
            {users.map((user) => (
              <Card key={user.id} className="mt-3">
                <Row>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Subtitle>{user.occupation}</Card.Subtitle>
                        <Card.Text>{user.bio}</Card.Text>
                        <Card.Link>{user.email}</Card.Link>
                        <Card.Text className="mt-4">
                          <Card.Link onClick={() => handleClick(user.id)}>
                            <Button
                              className="text-center"
                              variant="outline-secondary"
                            >
                              More Info
                            </Button>
                          </Card.Link>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card>
            ))}
          </>
        )}
      </Container>
    </div>
  );
};

export default UserLists;
