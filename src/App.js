import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Form'
import Weather from './components/Weather'
import Error from './components/Error'

const appID = 'f6fc9d8b58c6220bd6d37cbf62a5a564'
const APIEndPointPrefix = 'https://api.openweathermap.org/data/2.5/weather'

function App() {
  const [query, setQuery] = useState({
    city: '',
    country: ''
  })

  const [sendQuery, setSendQuery] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(false)

  const { city, country } = query

  useEffect(() => {
    if (sendQuery) {
      const endPoint = `${APIEndPointPrefix}?q=${city},${country}&appid=${appID}`

      fetch(endPoint)
        .then(response => {
          if (response.status !== 200) {
            throw new Error()
          } else {
            return response.json()
          }
        })
        .then(payload => {
          setResult(payload)
          setSendQuery(false)
          setError(false)
        }).catch(() => {
          setError(true)
        })
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
              { (error && error !== null) ? <Error>No hay resultados</Error> : <Weather result={result} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
