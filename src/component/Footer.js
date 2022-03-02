import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar fixed="bottom" style={{ background: '#e1e1e1' }}>
      <Container>
        copyright &copy; Martin Wangondu{' '}
        <a href="wangondumn@gmail.com">Email</a>
      </Container>
    </Navbar>
  );
};

export default Footer;
