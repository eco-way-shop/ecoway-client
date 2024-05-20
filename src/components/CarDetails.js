import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';


export default function CarDetails({ car }) {
  console.log(typeof(car.odometer));
  console.log(typeof(car.transmission));
  console.log(typeof(car.price));
  const Carwrap = styled.div`
    width: 100%;
    height: 400px;
    background: url(${car.image}) bottom center no-repeat;
    background-size: cover;
    padding: 30px;
    `;

  return (
    <>
      <Carwrap>
        <Navigation />
      </Carwrap>
      <section className="about-section">
        <h2 className="about-section__primary pb-4">
          { car.name }
        </h2>
        <h4 className="about-section__sub">
        <span className="badge badge-price">{ car.price }</span>
          <span className="badge badge-secondary">{ car.transmission }</span>
          {' '}
          {' '}
          <span className="badge badge-pill badge-success">
            AC -
            { car.ac }
          </span>
          {' '}  
          <span className="badge badge-odometer">{ car.odometer + " км"}</span>
          {' '}
          <span className="badge badge-color">{ car.color}</span>
          {' '}
          <span className="badge badge-battery">{ car.battery + " кВт" }</span>
          {' '}
        </h4>
        
        <h6 className="about-section_desc pb-4">
        {car.desc}
        </h6>
        <hr />
        <Link className="nav-link text-danger text-center" to="/cars">
          &larr; До машин
        </Link>
        <Link className="nav-link text-danger text-center" to="/test_drive">
           Замовити тест-драйв &rarr;
        </Link>
        <Link className="nav-link white" to="/logout">
                    Вихід
                  </Link>
      </section>
    </>
  );
}

CarDetails.propTypes = {
  car: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  transmission: PropTypes.string.isRequired,
  odometer: PropTypes.string.isRequired,
  battery: PropTypes.number.isRequired,
  ac: PropTypes.bool.isRequired,
  date_added: PropTypes.string.isRequired,
  
};
