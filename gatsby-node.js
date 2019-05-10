/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
     allNodeArticle {
       edges {
         node {
           id
           path {
             alias
           }
         }
       }
     }
    }
  `
  ).then(result => {
    result.data.allNodeArticle.edges.forEach(({ node }) => {
      createPage({
        path: node.path.alias,
        component: path.resolve(`./src/templates/article.js`),
        context: {
          id: node.id,
        },
      })
    })
  })
}
