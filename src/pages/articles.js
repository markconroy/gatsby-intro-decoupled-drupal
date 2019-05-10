import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticlesPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Articles</h1>
    <ul>
      {data.allNodeArticle.edges.map(edge => (
        <Fragment>
          <li style={{ clear: `both` }}>
            <h3><Link to={edge.node.path.alias}>{edge.node.title}</Link></h3>
            <small><em>Published: {edge.node.created}</em></small>
            <div style={{ maxWidth: `300px`, marginBottom: `1.5rem`, width: `100%`, float: `left`, overflow: `hidden`, marginRight: `1rem` }}>
              <Img fluid={edge.node.relationships.field_image.localFile.childImageSharp.fluid} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: edge.node.body.value.split(' ').splice(0, 25).join(' ') + '...' }}></div>
          </li>
        </Fragment>
      ))}
    </ul>
  </Layout>
)

export default ArticlesPage

export const ArticlesQuery = graphql`
  query {
    allNodeArticle {
      edges {
        node {
          id
          title
          path {
            alias
          }
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
    }
  }  
`
