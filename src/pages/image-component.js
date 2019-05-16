import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const ImagePage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Image Component - OOOH, we added props!</h1>
    <p>The Gatsby {`<Image>`} component is a really powerful image solution.</p>
    <p>Built-in, it comes with:</p>
    <ul>
      <li>Responsive Images</li>
      <li>Lazy Loading</li>
      <li>Image Optimisation</li>
      <li>Blur-up technique so pages don't jump as images load</li>
    </ul>
    <p>To use it:</p>
    <ul>
      <li>Place your image(s) into the <strong>src/images</strong> directory</li>
      <li>import the Image component at the top of your file</li>
      <li>Add a GraphQL Query to the component you want to place the image in</li>
      <li>Add the image using the {`<Image`} component</li>
    </ul>
    <ul>
      <li>
        <p>This image is 4.2MB in the repo. Gatsby renders it as 134kb. WIN!</p>
        <Img fluid={props.data.imageAthens.childImageSharp.fluid} />
      </li>
      <li>
        <p>This image is 4.6MB in the repo. Gatsby renders it as 91kb. ANOTHER WIN!</p>
        <Img fluid={props.data.imageBerlin.childImageSharp.fluid} />
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ImagePage

export const imagePageQuery = graphql`
  query {
    imageAthens: file(relativePath: { eq: "athens.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    imageBerlin: file(relativePath: { eq: "berlin.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`