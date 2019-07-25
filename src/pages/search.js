import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../components/container'
import Link from 'gatsby-link'
import InnerBanner from '../components/innerbanner'
import {InstantSearch,SearchBox,Index,Hits, Highlight,connectStateResults,} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite';
import styles from './search.module.css'


const searchClient = algoliasearch('BT7Z8CNZ04', '55b168d973407097a31c027d7dac5cbe');

class searchPage extends React.Component{
    render() {
        const [page] = get(this, 'props.data.allContentfulPage.edges')
        return(
            <div className={styles.searchpage}  >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Search</title>
                    <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
                </Helmet>
                <InnerBanner data={page.node} />
                <Container>
                    <InstantSearch indexName="casestudies" searchClient={searchClient}>
                        <SearchBox />
                        <p><b>Search Results:</b></p>
                        
                        <Hits hitComponent={Hit} />
                    </InstantSearch>
                </Container>
            </div>
        )
    }
}
function Hit(props) {
    console.log(props);
    
    return (
        <div className={styles.searchResult}> 
            <h3> <Link to={`/resources/casestudies/${props.hit.node.slug}`}>{props.hit.node.title}</Link></h3>
            <Highlight attribute="title" hit={props.hit.node} />
            <small><i>{new Date(props.hit.node.publishdate).toLocaleDateString()}</i></small>
            <p>{props.hit.node.summary}</p>
            <Link className="visitLink" to={`/resources/casestudies/${props.hit.node.slug}`}>View case studies</Link>
        </div>
    );
  }
export default searchPage

export const searchpage = graphql`
query searchpage{
    allContentfulPage(filter: {title: {eq: "search"}}) {
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