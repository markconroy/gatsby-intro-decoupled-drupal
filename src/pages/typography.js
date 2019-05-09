import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TypographyPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Typography.JS</h1>
      <p>To install:</p>
        <ul>
          <li>{`npm install gatsby-plugin-typography react-typography typography --save`}</li>
          <li>Add it to your <strong>gatsby-config.js</strong> as a plugin</li>
          <li>Setup your typography.js file - ours is at <strong>/src/utils/typography.js</strong></li>
          <li>There are many pre-created themes that you are also free to use or adapt.</li>
        </ul>

  </Layout>
)

export default TypographyPage
