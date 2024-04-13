import React from 'react'

import { MotionSection } from '@/app/components/shared/Motion'

import { companies } from './Companies.config'

import styles from './Companies.module.scss'

export const Companies = () => {
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className={styles.companies}
    >
      <div className={styles.textLogo}>
        <p>We are</p>
        <h4>Featured in</h4>
      </div>
      {companies.map((CompanyLogo, index) => (
        <CompanyLogo key={index} />
      ))}
    </MotionSection>
  )
}
