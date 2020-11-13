import React from 'react';
import { Container } from '../styles/styles';

// import { Container } from './styles';

function pages() {
  return (
    <Container style={{ background: '#fff !important' }}>
      <img
        src="./assets/logo.svg"
        alt="logo"
        style={{ width: '200px', marginBottom: '40px' }}
      />

      <h3 style={{ fontSize: '30px', color: '#333', fontWeight: '300' }}>
        Acesso negado! :(
      </h3>
    </Container>
  );
}

export default pages;
