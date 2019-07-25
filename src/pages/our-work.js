import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../components/container'
import InnerBanner from '../components/innerbanner'
import CaseStudies from '../components/case-studies/case-studies'

class OurWork extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const casestudieslist = get(this, 'props.data.allContentfulCaseStudies.edges')
    const [page] = get(this, 'props.data.allContentfulPage.edges')
    return (
      <div style={{ background: '#fff' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
          <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        </Helmet>
        <InnerBanner data={page.node}/>
        <section className="casestudieslist clearfix">
          <Container>
            <ul>
              {casestudieslist.map(({node})=>{
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

export default OurWork

export const ourworklist = graphql`
query ourworklist{
    allContentfulPage(filter: {title: {eq: "our work"}}) {
        edges {
          node {
            id
            bannerText
            description {
              childMarkdownRemark {
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
