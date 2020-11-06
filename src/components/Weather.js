import React from 'react'

export const Weather = ({ result }) => {
  const { name, main } = result

  if (!name) return null

  const kelvin = 273.15

  return (
    <div className="row">
      <div className="card-panel white col s12">
        <h2>El clima de {name} es:</h2>
        <p className="temperatura">
          {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
        </p>
        <p>Temperatura máxima: {parseInt(main.temp_max - kelvin)}</p>
        <p>Temperatura mínima: {parseInt(main.temp_min - kelvin)}</p>
      </div>
    </div>
  )
}

export default Weather