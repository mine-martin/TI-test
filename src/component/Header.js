import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar style={{ background: '#e1e1e1' }}>
      <Container>
        <Navbar.Brand>
          <h3>
            Users Database <a href="/">Home</a>
          </h3>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
