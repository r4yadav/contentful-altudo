import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../components/container'
import InnerBanner from '../components/innerbanner'
import styles from './innerpages.module.css'

class OurCapabilites extends React.Component{
    render() {
        const [post] = get(this, 'props.data.allContentfulPage.edges')
        return(
            <div style={{ background: '#fff' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Why Altudo</title>
                    <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
                </Helmet>
                <InnerBanner data={post.node}/>
                <Container>
                    <div className={styles.innerWrapper}  dangerouslySetInnerHTML={{__html: post.node.description.childMarkdownRemark.html,}}></div>
                </Container>
            </div>
        )
    }
}

export default OurCapabilites

export const pageQuery = graphql`
query ourcapabilites {
    allContentfulPage(filter: {title: {eq: "our capabilities"}}) {
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
  }  
`