import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import AddCarContainer from '../container/AddCarContainer';

export default function AddCar() {
  return (
    <Container>
      <AddCarContainer />
      <Footer />
    </Container>
  );
}
