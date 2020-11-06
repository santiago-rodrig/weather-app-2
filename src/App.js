import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Form'

const appID = 'f6fc9d8b58c6220bd6d37cbf62a5a564'
const APIEndPointPrefix= 'http://api.openweathermap.org/data/2.5/weather'

function App() {
  const [query, setQuery] = useState({
    city: '',
    country: ''
  })

  const [sendQuery, setSendQuery] = useState(false)

  const { city, country } = query

  useEffect(() => {
    if (sendQuery) {
      const endPoint = `${APIEndPointPrefix}?q=${city},${country}&appid=${appID}`

      fetch(endPoint)
        .then(response => response.json())
        .then(payload => {
          console.log(payload)
          setSendQuery(false)
        })
        .catch(error => console.log(error.message))
    }
  }, [sendQuery, city, country])

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
