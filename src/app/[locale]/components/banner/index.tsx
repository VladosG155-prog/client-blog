import { useTranslations } from 'next-intl'

import { Button } from '@/app/components/ui/Button'

import styles from './Banner.module.scss'
import Link from 'next/link'
import { ROUTES } from '@/app/constants/routes'

export const Banner = () => {
  const t = useTranslations('banner')

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h4>
          Posted on <span>startup</span>
        </h4>
        <h1>{t('title')}</h1>
        <p>
          By <span>James West</span> | May 23, 2022
        </p>
        <p>{t('description')}</p>
        <Button variant='primary'>
          <Link href={ROUTES.BLOG + '/' + 1}>Read More {'>'} </Link>
        </Button>
      </div>
    </div>
  )
}
