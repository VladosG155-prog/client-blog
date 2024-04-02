'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { MotionSection } from '@/app/components/shared/Motion'
import { ROUTES } from '@/app/constants/routes'

import styles from './About.module.scss'

export const About = () => {
  const t = useTranslations()

  return (
    <MotionSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className={styles.root}
    >
      <div className={styles.lines}>
        <div></div>
        <div></div>
      </div>
      <div>
        <h5>{t('About us')}</h5>
        <h2>{t('We are a community of content writers who share their learnings')}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
      <div>
        <h5>{t('Our mision')}</h5>
        <h3>{t('Creating valuable content for creatives all around the world')}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      <Link href={ROUTES.BLOG + '/' + '1'}>
        {t('Read more')} {'>'}
      </Link>
    </MotionSection>
  )
}
