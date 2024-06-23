import React from 'react';
import { Row, Col } from 'react-bootstrap';
import car from '../imgs/feature-ride.png';

export default function FeatureSection() {
  return (
    <section className="about-section feature-section">
      <Row className="mt-2">
        <Col sm={6}>
          <img src={car} className="img-fluid" alt="ride" />
        </Col>
        <Col sm={6}>
          <h4 className="about-section__left-title ">
             Тут ви можете знайти авто для себе
          </h4>
          <p className="about-section__desc">
            Велика кількість автомобілів в наявності, в різних цінових категоріях.
            Тест-драйв у зручний для вас час.
          </p>
          <p>
            <a href="/register" className="btn btn-oval">
              Переглянути
            </a>
          </p>
        </Col>
      </Row>
    </section>
  );
}
