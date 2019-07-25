import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './aboutus.module.css'

export default () => (
  <div>
    <section className={styles.revenue}>
          <div className={styles.brdr}></div>
          <div className={styles.revenueLt}>
              <div className={styles.revenueInner}>
                <div className={styles.revenueInnerpad}>
                    <h2>
                      Drive Revenue through Digital
                    </h2>
                    <p>Our Revenue Engine methodology brings deep expertise across the marketing tech eco-system.</p>
                </div>
              </div>
          </div>
          <div className={styles.revenueRt}>
              <div className={styles.box}>
                <div></div>
                <p>Personalize and individualize the experience</p>
              </div>
              <div className={styles.box}>
                <p>Get a single view of the customer</p>
              </div>
              <div className={styles.box}>
                <p>Integrate your martech stack into a customer experience platform</p>
              </div>
              <div className={styles.box}>
                <p>Create a multi-channel demand gen strategy</p>
              </div>
          </div>
        </section>
  </div>
)
