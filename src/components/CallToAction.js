import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function CallToAction() {
  const token = useSelector(state => state.user.token);

  return (

    <section className="call-action">
      <h4  className="call-action-text">Обирайте автомобіль, та приходьте на тест-драйв у зручний для вас час</h4>
      <p>
      {
            token === undefined || token === 'undefined' && token == null 
              ? (
                <> 
          <Link className="btn btn-oval" to="/login">
              Записатись
            </Link>
              </>
              ) : (
                <> 
          <Link className="btn btn-oval" to="/cars">
              Записатись
            </Link>
            </>
              )
            }

    
      </p>
    </section>

  );
}
