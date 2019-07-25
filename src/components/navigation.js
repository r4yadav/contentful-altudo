import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

import Searchicon from '../../static/assets/search.png'
export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/why-alutdo/">Why Altudo</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/our-capabilites/">Our Capabilities</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/our-work">Our Work</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/search">
          <img className={styles.searchicon} src={Searchicon} />
        </Link>
      </li>
    </ul>
  </nav>
)
