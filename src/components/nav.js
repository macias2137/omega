import React from "react"

import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Strona Główna</Link>
        </li>
        <li>
          <Link to="/oferta">Oferta</Link>
        </li>
        <li>
          <Link to="/pricelist">Cennik</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

