import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';

export default function CarItem({ car, handleFavourite }) {
  
  return (

    <Card style={{ width: '18rem' }} className="m-2">
      <Card.Img variant="top" src={car.image} style={{ backgroundSize: 'cover', width: 286, height:190}} />
      <Card.Body>
        
      <section className="about-section">
        <h2 className="carTitle pb-4 pr-4">
          { car.name } 
          {'  '}
          <BsHeartFill pl-4 size={20} color={car.fav === 'Yes' ? 'red' : 'gray'} title="Add to Favourite" onClick={handleFavourite} />
        </h2>
        <h4 className="about-_info">
          <span className="badge badge-transmission">{ car.transmission }</span>
          {' '}
          {' '}
          <span className="badge badge-ac badge-success">
           Клімат контроль
           {' '}
          </span>
          {' '}  
          <span className="badge badge-odometer">{ car.odometer + " км"}</span>
          {' '}
          <span className="badge badge-color">{ car.color}</span>
          {' '}
          <span className="badge badge-battery">{ car.battery + " кВт" }</span>
          {' '}
          <span className="badge badge-price">{ car.price + " $" }</span>
          {' '}
          {' '}
        </h4>
        </section>
    
        <Link to={`cars/${car.id}`} className="btn-oval-car p-2">Детальніше</Link>
      </Card.Body>
    </Card>

  );
}

CarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    car: PropTypes.instanceOf(Object).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    odometer: PropTypes.string.isRequired,
    battery: PropTypes.number.isRequired,
    ac: PropTypes.bool.isRequired,
  
    fav: PropTypes.string.isRequired,
    date_added: PropTypes.string.isRequired,
  }).isRequired,
  handleFavourite: PropTypes.func.isRequired,
};
