import React from 'react'
import Container from '../components/container'

import styles from './innerbanner.module.css'

export default ({ data }) => (
  <section className={styles.banner}>
    <Container>
      <div className={styles.container}>
         <h1 className={styles.innerWrap} dangerouslySetInnerHTML={{__html: data.bannerText,}}></h1>
      </div>
    </Container>
  </section>
)
