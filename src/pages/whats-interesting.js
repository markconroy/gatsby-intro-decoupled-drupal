import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WhatsInterestingPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Creating a New Page</h1>
    <p>To create this page, we simply added a file called <strong>whats-interesting.js</strong> in the <strong>src/pages</strong> directory</p>
    <p>Yes, it's that easy.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WhatsInterestingPage
