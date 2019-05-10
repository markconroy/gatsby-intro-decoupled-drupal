import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page4Page = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>What's Changed Here?</h1>
      <p>This section is about adding Dynamic Data:</p>
      <ul>
        <li>Get data from a Drupal website, via JSON:API Module</li>
        <ul>
          <li>Create an articles listing page</li>
          <li>Create an article details page</li>
        </ul>
      </ul>

      <h2>Getting the Data</h2>
      <ul>
        <li>Install JSON:API module</li>
        <li>Check that you can access the content, for articles - http://umami.local/jsonapi/node/article</li>
        <li>Check that you can access the content, for an individual article append the UUID of the article - http://umami.local/jsonapi/node/article/08ca15fc-203a-4913-8225-916091526020</li>
        <li>run <strong>{`npm install --save gatsby-source-drupal`}</strong></li>
        <li>Add this as a plugin to our <strong>gatsby-config.js</strong> file</li>
        <li></li>
        <li></li>
      </ul>
  </Layout>
)

export default Page4Page