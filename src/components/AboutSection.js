import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ride from '../imgs/ride.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

export default function AboutSection() {
  const token = useSelector(state => state.user.token);

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
          {
            token === undefined || token === 'undefined' && token == null 
              ? (
                <> 
          <Link className="btn btn-oval" to="/login">
              Дізнатись більше
            </Link>
              </>
              ) : (
                <> 
          <Link className="btn btn-oval" to="/cars">
              Дізнатись більше
            </Link>
            </>
              )
            }

          </p>
        </Col>
        <Col sm={6}>
          <img src={ride} className="img-fluid" alt="ride" />
        </Col>
      </Row>
    </section>
  );
}
