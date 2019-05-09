import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page2Page = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>What's Changed Here?</h1>
      <p>We've done a couple of things for this part:</p>
      <ul>
        <li>Created a {`<Menu>`} component</li>
        <li>Created a {`<Footer>`} component and added the menu to it</li>
        <li>Edited the {`<Header`} component to add the menu to it</li>
        <li>Edited the {`<Layout`} component to reflect these changes</li>
        <li>Added support for SASS - just in case you like it!</li>
      </ul>
  </Layout>
)

export default Page2Page
