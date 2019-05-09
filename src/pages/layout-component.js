import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LayoutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Layout Component</h1>
    <p>The Layout Component sets up the default template for a page.</p>
    <p>It uses a GraphQL StaticQuery to query the <strong>gatsby-config.js file</strong> to grab the site title as a prop. It then renders the {`<Header>`} component and injects the site title as the siteTitle <strong>prop</strong>. Did you notice we changed it to "GatsbyJS is Cool"</p>
    <p>After this, it renders a div with some layout CSS applied - yes, that's <strong>CSS in JS</strong>. What's cool about that?</p>
    <ul>
      <li>All code for a component is within that component - html, css, js</li>
      <li>If you remove code, you won't (shouldn't) break anything else</li>
      <li>It can do everything CSS can do ... AND everything JS can do - a progressive enhancement, I guess!</li>
      <li>Scoped selectors means unique class names per component - no more leaking</li>
      <li>That said, I prefer to put (s)css in my .scss files. Sorry.</li>
    </ul>
    <p>Lastly, a footer is rendered.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LayoutPage
