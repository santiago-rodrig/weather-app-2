import React, { Fragment } from 'react';
import Header from './components/Header'
import Formulario from './components/Form'

function App() {
  return (
    <>
      <Header>Aplicación del Clima</Header>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
