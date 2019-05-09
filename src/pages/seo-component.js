import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SEOPage = () => (
  <Layout>
    <SEO 
      title="Gatsby SEO"
      keywords={[`gatsby`, `application`, `react`]}
      description="This page is all about SEO" />
    <h1>SEO Component</h1>
    <p>The {`<SEO>`} component exists to allow us to add meta data to the head of our pages.</p>
    <p>By default, it will use data from your <strong>gatsby-config.js</strong> file, but it's easy to override it by passing in your own variables as props as you can see in the code for this page above.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SEOPage
