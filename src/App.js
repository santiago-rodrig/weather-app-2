import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Form'

function App() {
  const [query, setQuery] = useState({
    city: '',
    country: ''
  })

  const [sendQuery, setSendQuery] = useState(false)

  const { city, country } = query

  // TODO
  // const queryAPI = async () => {
  // }

  // useEffect(() => {
  // }, [sendQuery])

  return (
    <>
      <Header>Aplicación del Clima</Header>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario query={query} setQuery={setQuery} setSendQuery={setSendQuery} />
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
