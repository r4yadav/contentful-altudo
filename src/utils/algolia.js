const indexpageQuery = `{
  allContentfulCaseStudies{
    edges{
      node{
        title
        slug
        summary
        publishdate
        bannerContent{
          childMarkdownRemark{
            html
          }
        }
      }
    }
  }
}
`
  const queries = [
    {
      query: indexpageQuery,
      transformer: ({ data }) => data.allContentfulCaseStudies.edges
    }
  ]
  
  module.exports = queries