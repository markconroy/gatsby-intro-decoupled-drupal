import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LinkPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `link component`]} />
    <h1>Link Component</h1>
    <h2>React {`<Link>`}</h2>
    <p>React has a {`<Link>`} component to link to pages within our React app.</p>
    <p>It is used instead of the {`<a>`} tag so React knows it is an internal link.</p>
    <p>Because it's an internal link, React knows to only load the component that you need and not perform a complete page refresh. Use the {`<a>`} tag for that to link outside of your app.</p>
    <h2>GatsbyJS {`<Link>`}</h2>
    <p>GatstyJS takes this one step further by doing 2 things:</p>
    <ul>
      <li>Any link created by {`<Link>`} that is visible in the viewport is prefetched using <strong>IntersectionObserver</strong>.</li>
      <li>If a link is <stong>onMouseOver</stong> then the resource is loaded, so by the time you click on it the browser already has the page for you.</li>
      <li>This helps MASSIVELY with performance. THANKS GatsbyJS</li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LinkPage
