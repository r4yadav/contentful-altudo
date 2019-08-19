import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './style.module.css'

export default ({casestudies}) => (
  <div className={styles.casestudyy}>
    <Img alt="" sizes={casestudies.thumbnail.sizes} />
    <h2>{casestudies.title}</h2>
    <p>{casestudies.summary}</p>
    <Link to={`/resources/casestudies/${casestudies.slug}`}>View Case Study</Link>
  </div>
)