import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import AddCarContainer from '../container/AddCarContainer';

export default function AddCar() {
  return (
    <Container className="bg-dark">
      <Navigation />
      <AddCarContainer />
      <Footer />
    </Container>
  );
}
