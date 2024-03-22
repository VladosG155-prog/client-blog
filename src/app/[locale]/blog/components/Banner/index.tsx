import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Button } from '@/app/components/ui/Button'

import styles from './BlogBanner.module.scss'

import blogBanner from '@assets/blogBanner.png'

export const BlogBanner = () => {
  const t = useTranslations('banner')

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.first}>
          <h4>Featured Post</h4>
          <h1>Step-by-step guide to choosing great font pairs</h1>
          <p>
            By <span>James West</span> | May 23, 2022
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <Button variant='primary'>Read More {'>'} </Button>
        </div>
        <Image src={blogBanner} alt='blog-image' />
      </div>
    </div>
  )
}
