import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WhatsInterestingPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Menu Component</h1>
    <p>The menu component is a good example of how you can create a component once in Gatsby and reuse it other places. We can even change how it looks and functions by adding attributes to it via props.</p>
    <p>In the header we added props a light background and a mobile navigation <br />
    <strong>{`<Menu menuClass={'menu menu--light-bg menu--is-mobile'} />`}</strong></p>
    <p>In the footer we added props a dark background and no change for mobile navigation <br />
    <strong>{`<Menu menuClass={'menu menu--dark-bg menu--is-not-mobile'} />`}</strong></p>
    <p>Another thing that can be a little tricky with menus is setting an active class on the menu item for the current page, such as /about-us (or parent of the current page, such as /about-us/team). This is easily achieved in Gatsby by adding a prop to say what class acts as the active one. In our case, we set <strong>activeClassName="menu__link--active"</strong></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WhatsInterestingPage
