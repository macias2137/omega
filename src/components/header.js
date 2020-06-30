import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav"
import "../styles/index.sass"

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/">
      {siteTitle}
    </Link>
    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
