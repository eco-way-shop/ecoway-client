import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="header">
      <Navigation />

      <div className="header-content mt-5">
        <h1 className="header-content__title">Знайдіть ідеальну машину саме для вас </h1>
        <p className="header-content__desc">
          Чудові попозиції екологічних електро автомобілів за хорошими цінами
        </p>
        <p>
          <Link className="btn btn-oval" to="/register">Переглянути</Link>
        </p>
      </div>
    </header>
  );
}
