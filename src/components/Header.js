import React from 'react'

const Header = ({ children }) => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">{children}</a>
      </div>
    </nav>
  )
}

export default Header
