const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const casestudiestemp = path.resolve('./src/templates/case-studies.js')
    resolve(
      graphql(
        `
        {
          allContentfulCaseStudies {
            edges {
              node {
                slug
                title
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const casestudies = result.data.allContentfulCaseStudies.edges
        casestudies.forEach((casestudie, index) => {
          createPage({
            path: `/resources/casestudies/${casestudie.node.slug}`,
            component: casestudiestemp,
            context: {
              slug: casestudie.node.slug
            },
          })
        })
      })
    )
  })
}