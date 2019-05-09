import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/headings/headings"
import Button from "../components/button/button"
import ButtonComponent from "../components/button/button";

const StyledComponentsPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Styled Components</h1>
      <p>To install:</p>
        <ul>
          <li>{`npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components`}</li>
          <li>Add it to your <strong>gatsby-config.js</strong> as a plugin</li>
        </ul>

        <ul>
          <li><h1>This is a Heading Level 1</h1></li>
          <li><h2>This is a Heading Level 2</h2></li>
          <li><h3>This is a Heading Level 3</h3></li>
          <li><h4>This is a Heading Level 4</h4></li>
          <li><h5>This is a Heading Level 5</h5></li>
          <li><h6>This is a Heading Level 6</h6></li>
        </ul>
        
        <ul>
          <li><Heading headingElement={'h1'} headingClass={'h2'} headingContent={'This is a Heading Level 1'} styledComp={'marky'} /></li>
          <li><Heading headingElement={'h2'} headingClass={'h2'} headingContent={'This is a Heading Level 2'} /></li>
          <li><Heading headingElement={'h3'} headingClass={'h2'} headingContent={'This is a Heading Level 3'} /></li>
          <li><Heading headingElement={'h4'} headingClass={'h4'} headingContent={'This is a Heading Level 4'} /></li>
          <li><Heading headingElement={'h5'} headingClass={'h5'} headingContent={'This is a Heading Level 5'} /></li>
          <li><Heading headingElement={'h6'} headingClass={'h6'} headingContent={'This is a Heading Level 6'} /></li>
        </ul>

        <ButtonComponent />
    
  </Layout>
)

export default StyledComponentsPage
