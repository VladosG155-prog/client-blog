import { useTranslations } from 'next-intl'

import { Button } from '@/app/components/ui/Button'

import styles from './BlogBanner.module.scss'

export const BlogBanner = () => {
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
        <Button variant='primary'>Read More {'>'} </Button>
      </div>
    </div>
  )
}
