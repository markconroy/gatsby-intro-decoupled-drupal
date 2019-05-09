import React from "react"
import { Link } from "gatsby"
import "./menu.scss"

const mobileMenu = () => {
  const menu = document.querySelector(".header .menu__items");
  menu.classList.toggle("menu__items--expanded");
  menu.classList.toggle("menu__items--collapsed");
}

const Menu = props => (
  <nav className={props.menuClass}>
    <button className="menu__toggle" onClick={mobileMenu}>Menu <span className="menu__toggle-icon">+</span></button>
    <ul className="menu__items menu__items--expanded">
      <li className="menu__item"><Link to="/" className="menu__link" activeClassName="menu__link--active">Home</Link></li>
      <li className="menu__item"><Link to="/part-2" className="menu__link" activeClassName="menu__link--active">Part 2</Link></li>
      <li className="menu__item"><Link to="/part-3" className="menu__link" activeClassName="menu__link--active">Part 3</Link></li>
      <li className="menu__item"><Link to="/link-component/" className="menu__link" activeClassName="menu__link--active">Link Component</Link></li>
      <li className="menu__item"><Link to="/image-component/" className="menu__link" activeClassName="menu__link--active">Image Component</Link></li>
      <li className="menu__item"><Link to="/whats-interesting/" className="menu__link" activeClassName="menu__link--active">What's Interesting?</Link></li>
      <li className="menu__item"><Link to="/menu-component/" className="menu__link" activeClassName="menu__link--active">Menu Component</Link></li>
      <li className="menu__item"><Link to="/typography/" className="menu__link" activeClassName="menu__link--active">Typography.JS</Link></li>
      <li className="menu__item"><Link to="/styled-components/" className="menu__link" activeClassName="menu__link--active">Styled Components</Link></li>
    </ul>
  </nav>
)

export default Menu