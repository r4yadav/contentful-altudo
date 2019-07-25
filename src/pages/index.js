import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
// import ArticlePreview from '../components/article-preview'


import Container from '../components/container'
import Aboutus from '../components/about-us/aboutus'
import CaseStudies from '../components/case-studies/case-studies'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    // const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    // const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const [banner] = get(this, 'props.data.allContentfulBanner.edges')
    const posts = get(this, 'props.data.allContentfulCaseStudies.edges')
    return (
      <div style={{ background: '#fff' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
          <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        </Helmet>
        <Hero data={banner.node} />
        {/* <Aboutus /> */}
        <section className="casestudieslist clearfix">
          <Container>
            <ul>
              {posts.map(({node})=>{
                return (
                  <li key={node.slug}>
                      <CaseStudies casestudies={node} />
                  </li>
                )
              })}
            </ul>
          </Container>
        </section>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
query HomeQuery{
  allContentfulBanner {
    edges {
      node {
        id
        title
        bannerImage{
          file{
            url
          }
        }
        content{
          childMarkdownRemark{
            html
          }
        }
      }
    }
  }
  allContentfulCaseStudies(sort: { fields: [publishdate], order: DESC }) {
    edges {
      node {
        title
        summary
        slug
        thumbnail {
          sizes(maxWidth: 550, maxHeight: 362, resizingBehavior: SCALE) {
            ...GatsbyContentfulSizes_withWebp
          }
        }
      }
    }
  }
}
`
