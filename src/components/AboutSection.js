import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ride from '../imgs/ride.jpg';

export default function AboutSection() {
  return (
    <section className="about-section">
      {/* <h4 className="about-section__sub"></h4> */}
      <h2 className="about-section__primary pb-4">
       Комфортні електро автомобілі для вас
      </h2>
      <Row className="mt-5">
        <Col sm={6}>
          <h4 className="about-section__left-title">
            Економність та доступність
          </h4>
          <p className="about-section__desc">
          На дорогах все частіше можна зустріти незвичайний вид 
          транспорту — електромобіль. Попит на таке авто постійно 
          зростає — перш за все, через економічні кризи, збільшення
          вартості бензину і газу, погіршення екології.
          </p>
          <p>
          <Link className="btn btn-oval" to="/login">
              Дізнатись більше
            </Link>
          </p>
        </Col>
        <Col sm={6}>
          <img src={ride} className="img-fluid" alt="ride" />
        </Col>
      </Row>
    </section>
  );
}
