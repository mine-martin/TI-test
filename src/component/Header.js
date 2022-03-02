import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar style={{ background: '#e1e1e1' }}>
      <Container>
        Users Database <a href="/">Home</a>
      </Container>
    </Navbar>
  );
};

export default Header;
