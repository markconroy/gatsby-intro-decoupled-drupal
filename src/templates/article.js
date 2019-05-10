import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'

export default ({ data }) => {
  const article = data.nodeArticle
  return (
    <Layout>
      <Fragment>
        <h1>{ article.title }</h1>
        <small><em>Published: { article.created }</em></small>
        <div style={{ maxWidth: `900px`, marginBottom: `1.45rem`, width: `100%` }}>
          <Img fluid={ article.relationships.field_image.localFile.childImageSharp.fluid } />
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.body.value }}></div>
      </Fragment>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    nodeArticle(id: { eq: $id }) {
      title
      body {
        value
      }
      created
      relationships {
        field_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`