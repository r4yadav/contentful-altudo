import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import logo from './images/logo.png'


import Container from '../container'
import Navigation from '../navigation'
import styles from './header.module.css'
export default () => (
  <header className={styles.header}>
    <Container>
      <a className={styles.logo} href="/"><img src={logo} /></a>
      <Navigation />
    </Container>
  </header>
)
