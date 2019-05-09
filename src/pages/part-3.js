import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page3Page = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>What's Changed Here?</h1>
      <p>This section is about styling:</p>
      <ul>
        <li>Typography.JS - set up fonts and vertical rhythm</li>
        <li>Styled Components - set up styling for components</li>
      </ul>

  </Layout>
)

export default Page3Page
