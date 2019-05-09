import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>What's Interesting So Far?</h1>
    <p>There are a number of really cool things already:</p>
    <ul>
      <li><Link to="/link-component">The {`<Link>`} Component</Link></li>
      <li><Link to="/image-component">The {`<Image>`} Component</Link></li>
      <li><Link to="/layout-component">The {`<Layout>`} Component</Link></li>
      <li><Link to="/seo-component">The {`<SEO>`} Component</Link></li>
      <li><Link to="/whats-interesting">Creating New Pages</Link></li>
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/link-component/">Link Component</Link> |
    <Link to="/image-component/">Image Component</Link> |
    <Link to="/whats-interesting/">What's Interesting?</Link>
  </Layout>
)

export default IndexPage
