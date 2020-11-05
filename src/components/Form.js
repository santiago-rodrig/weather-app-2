import React, { useState } from 'react'

const Form = () => {
  const [query, setQuery] = useState({
    city: '',
    country: ''
  })

  const { city, country } = query

  const handleChange = e => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className="row">
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
    </form>
  )
}

export default Form
