import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Container from '../components/container'
import styles from './casestudies.module.css'

class CaseStudies extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulCaseStudies')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <div style={{ background: '#fff' }}>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{`${post.title} | ${siteTitle}`}</title>
            <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        </Helmet>
        {/* Banner Section */}
        <section style={{backgroundImage:'url('+post.bannerImage.file.url+')'}} className={styles.banner}>
          <Container>
            <div className={styles.container}>
                <div className={styles.innerWrap} dangerouslySetInnerHTML={{__html:post.bannerContent.childMarkdownRemark.html}}>
                </div>
            </div>
          </Container>
        </section>
        {/* Banner Section */}
        <div className={styles.caseStudiesWrap}>
          {/* case studies section */}
          <section className={styles.caseStudies}>
            <Container>
              <div className={styles.container}>
                  <div className={styles.innerWrap} dangerouslySetInnerHTML={{__html:post.useCase.childMarkdownRemark.html}}>
                  </div>
              </div>
            </Container>
          </section>
          {/* case studies section */}

          {/* Chalanges */}
          <section className={styles.chalanges}>
            <Container>
              <div className={styles.container}>
                  <div className={styles.innerWrap} dangerouslySetInnerHTML={{__html:post.challenges.childMarkdownRemark.html}}>
                  </div>
              </div>
            </Container>
          </section>
          {/* Chalanges */}
          
          {/* What we did */}
          <section className={styles.solution}>
            <Container>
              <div className={styles.container}>
                  <div className={styles.innerWrap} dangerouslySetInnerHTML={{__html:post.solution.childMarkdownRemark.html}}>
                  </div>
              </div>
            </Container>
          </section>
          {/* What we did */}

          {/* results */}
          <section className={styles.solution}>
            <Container>
              <div className={styles.container}>
                  <div className={styles.innerWrap} dangerouslySetInnerHTML={{__html:post.result.childMarkdownRemark.html}}>
                  </div>
              </div>
            </Container>
          </section>
          {/* results */}
        </div>
      </div>
    )
  }
}

export default CaseStudies

export const casestudiesQueries = graphql`
query casestudiesbyslug($slug: String!){
	contentfulCaseStudies(slug:{eq:$slug}){
    title
    bannerImage{
        file{
          url
        }
    }
    bannerContent{
      childMarkdownRemark{
        html
      }
    }
    useCase{
       childMarkdownRemark{
        html
      }
    }
    challenges{
       childMarkdownRemark{
        html
      }
    }
    solution{
       childMarkdownRemark{
        html
      }
    }
    result{
       childMarkdownRemark{
        html
      }
    }
  }
}
`
