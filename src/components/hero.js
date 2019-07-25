import React from 'react'
import Container from '../components/container'

import styles from './hero.module.css'

export default ({ data }) => (
  <section className={styles.banner} style={{backgroundImage:'url('+data.bannerImage.file.url+')'}}>
    <Container>
      <div className={styles.innerWrap} dangerouslySetInnerHTML={{__html: data.content.childMarkdownRemark.html,}}></div>
    </Container>
  </section>
)
