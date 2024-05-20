import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import TestDrivesContainer from '../container/TestDrivesContainer';

export default function TestDrive() {
  return (
    <Container className="bg-dark">
      <Navigation />
      <TestDrivesContainer />
      <Footer />
    </Container>
  );
}
