import React from "react"
import Menu from "../menu/menu"
import './footer.scss'

const Footer = () => (
  <footer className="footer">
    <div className="layout-contained padding-horizontal">
      <Menu menuClass={'menu menu--dark-bg menu--footer menu--is-not-mobile'} />
      
      © {new Date().getFullYear()}, @markconroy| | Built with <a className="footer__link" href="https://www.gatsbyjs.org">Gatsby</a>

    </div>
  </footer>
)
  export default Footer
