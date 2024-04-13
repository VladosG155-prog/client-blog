'use client'
import { Button } from 'client-blog-ui'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { MotionDiv } from '@/app/components/shared/Motion'

import styles from './SpecialPost.module.scss'

import specialPng from '@assets/special.png'

export const SpecialPost = () => {
  const t = useTranslations()
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Image src={specialPng} alt='specialPost' />
      </div>
      <MotionDiv
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.info}
      >
        <h5>{t('why we started')}</h5>
        <h1>{t('It started out as a simple idea and evolved into our passion')}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <Button variant='primary'>
          {t('Discover our story')} {'>'}
        </Button>
      </MotionDiv>
    </div>
  )
}
