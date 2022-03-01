import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

function UserLists() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useState(' ');

  useEffect(() => {
    fetch(`https://ti-react-test.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => console.error(err.message));
  }, [user]);

  return (
    <div>
      <Container className="mt-5 mb-5">
        {!loading && users === 0 && (
          <h3 className="text-6xl text-center mx-auto mt-32">
            No users in the database
          </h3>
        )}

        {loading ? (
          <h3 className="text-6xl text-center mx-auto mt-32">...Loading</h3>
        ) : (
          <>
            {users.map((user) => (
              <Card key={user.id}>
                <Row>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Subtitle>{user.occupation}</Card.Subtitle>
                        <Card.Text>{user.bio}</Card.Text>
                        <Card.Link>{user.email}</Card.Link>
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
}

export default UserLists;
