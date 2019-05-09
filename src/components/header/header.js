import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "../menu/menu"
import './header.scss'

const Header = ({ siteTitle }) => (
  <header className="header bg-grey--lightest">
    <div className="layout-contained padding-horizontal">
        <Link to="/" className="header__logo" rel="home">
          {siteTitle}
        </Link>
      <Menu menuClass={'menu menu--light-bg menu--is-mobile'} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
