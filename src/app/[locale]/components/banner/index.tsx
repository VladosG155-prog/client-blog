'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { Button } from 'client-blog-ui'
import { ROUTES } from '@/app/constants/routes'

import styles from './Banner.module.scss'

export const Banner = () => {
  const t = useTranslations('')

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h4>
          Posted on <span>startup</span>
        </h4>
        <h1>{t('Step-by-step guide to choosing great font pairs')}</h1>
        <p>
          By <span>James West</span> | May 23, 2022
        </p>
        <p>{t('banner.description')}</p>
        <Link href={ROUTES.BLOG + '/' + 1}>
          <Button variant='primary'>
            {t('Read more')} {'>'}{' '}
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default Banner
