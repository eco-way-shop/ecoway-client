import React, { useState, useRef, FormElement } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AddCar({ addCar, carData }) {
    const make = useRef('');
  const model = useRef('');
  const year = useRef('');
  const color = useRef('');
  const odometer = useRef('');
  const price = useRef('');
  const battery = useRef('');
  const desc = useRef('');
  const maxCapacity = useRef('');
  const transmission = useRef('');
  const imageUrl = useRef('');
  const ac = useRef(false); // Initialize checkbox state to false

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCar = {
      make: make.current.value,
      model: model.current.value,
      year: year.current.value,
      color: color.current.value,
      odometer: odometer.current.value,
      price: parseFloat(price.current.value), // Convert price to number
      battery: parseInt(battery.current.value), // Convert battery to integer
      desc: desc.current.value,
      maxCapacity: parseInt(maxCapacity.current.value), // Convert maxCapacity to number
      transmission: transmission.current.value,
      imageUrl: imageUrl.current.value,
      ac: ac.current.checked, // Get boolean value from checkbox
    };

    addCar(newCar)
      .then(() => {
        // Handle successful car creation (e.g., redirect to car list)
        console.log('Car added successfully!');
      })
      .catch((error) => {
        console.error('Error adding car:', error);
        // Handle errors during car creation (show error message)
      });
  };

  // ... rest of the component (form elements & styling)

  return (
    <form onSubmit={handleSubmit}>
        <div className="add-car-form">
          <h2 className="add-car-title">Додати автомобіль</h2>
          <p className="add-car-subtitle">Заповніть форму, щоб додати новий автомобіль.</p>
          <div className="input"> 
          <label className="form-label" htmlFor="make">
            Виробник:
          </label>
          <input
            ref={make}
            type="text"
            id="make"
            name="make"
            placeholder="Введіть виробника"
            required
          />
          </div>
       <div className="input">
          <label className="form-label" htmlFor="model">
            Модель:
          </label>
          <input
            ref={model}
            type="text"
            id="model"
            name="model"
            placeholder="Введіть модель"
            required
          />
          </div>
       <div className="input">
          <label className="form-label" htmlFor="year">
            Рік випуску:
          </label>
          <input
            ref={year}
            type="number"
            id="year"
            name="year"
            placeholder="Введіть рік випуску"
            required
          />
          </div>
       <div className="input">
          <label className="form-label" htmlFor="color">
            Колір:
          </label>
          <input
            ref={color}
            type="text"
            id="color"
            name="color"
            placeholder="Введіть колір"
            required
          />
          </div>
       <div className="input">
          <label className="form-label" htmlFor="odometer">
            Пробіг (км):
          </label>
          <input
            ref={odometer}
            type="number"
            id="odometer"
            name="odometer"
            placeholder="Введіть пробіг"
            required
          />
          </div>
      <div className="input">
          <label className="form-label" htmlFor="price">
            Ціна ($):
          </label>
          <input
            ref={price}
            type="number"
            id="price"
            name="price"
            placeholder="Введіть ціну"
            required
          />
          </div>
      <div className="input">
          <label className="form-label" htmlFor="battery">
            Ємність акумулятора (Ah):
          </label>
          <input
            ref={battery}
            type="number"
            id="battery"
            name="battery"
            placeholder="Введіть ємність акумулятора"
            required
          />
          </div>
      <div className="input">
          <label className="form-label" htmlFor="desc">
            Опис:
          </label>
          <textarea ref={desc} id="desc" name="desc" placeholder="Введіть опис" />
          </div>
          <div className="input">
          <label className="form-label" htmlFor="maxCapacity">
            Максимальна кількість пасажирів:
          </label>
          <input
            ref={maxCapacity}
            type="number"
            id="maxCapacity"
            name="maxCapacity"
            placeholder="Введіть максимальну кількість пасажирів"
            required
          />
      </div>
      <div className="input">
          <label className="form-label" htmlFor="transmission">
            Трансмісія:
          </label>
          <input
            ref={transmission}
            type="text"
            id="transmission"
            name="transmission"
            placeholder="Введіть тип трансмісії"
            required
          />
          </div>
      <div className="input">
          <label className="form-label" htmlFor="imageUrl">
            URL зображення:
          </label>
          <input
            ref={imageUrl}
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Введіть URL зображення"
            required
          />
          </div>
      <div className="ac-check">
          <label className="form-label">
            Кондиціонер:
          </label>
          <input type="checkbox" ref={ac} />
          </div>
          <div className="form-actions">
      <Link className="back_link" to="/cars">
        &larr; До машин
      </Link>
      <button type="submit" className="submit">
        Додати автомобіль
      </button>
    </div>
  </div>
  </form>
);
}

AddCar.propTypes = {
  memberId: PropTypes.number.isRequired,
  
  onSubmitSuccess: PropTypes.func.isRequired,
  onSubmitError: PropTypes.func,
};

AddCar.defaultProps = {
  onSubmitError: () => {},
};
export default (AddCar);
