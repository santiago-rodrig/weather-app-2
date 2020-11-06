import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Form = ({ query, setQuery, setSendQuery }) => {
  const [error, setError] = useState(false)
  const { city, country } = query

  const handleChange = e => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (city.trim() === '' || country.trim() === '') {
      setError(true)

      return
    }

    setError(false)
    setSendQuery(true)
  }

  return (
    <form className="row" onSubmit={handleSubmit}>
      { error ? <Error>Todos los campos son obligatorios</Error> : null }
      <div className="input-field col s12">
        <input type="text" name="city" id="city" value={city} onChange={handleChange} />
        <label htmlFor="city">Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select name="country" id="country" value={country} onChange={handleChange}>
          <option value="" disabled>-- Seleccione un país --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="country">País: </label>
      </div>
      <div className="input-field col s12">
        <button className="waves-effect waves-light btn-large btn-block yellow accent-4">
          Predecir el Clima
        </button>
      </div>
    </form>
  )
}

Form.propTypes = {
  query: PropTypes.object.isRequired,
  setQuery: PropTypes.func.isRequired,
  setSendQuery: PropTypes.func.isRequired
}

export default Form
