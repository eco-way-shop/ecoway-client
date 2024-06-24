import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (

    <section className="call-action">
      <h4  className="call-action-text">Обирайте автомобіль, та приходьте на тест-драйв у зручний для вас час</h4>
      <p>
        <Link className="btn btn-oval" to="/register">Записатись</Link>
      </p>
    </section>

  );
}
