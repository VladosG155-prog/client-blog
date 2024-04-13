'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { Post } from '@/app/components/entities/Post'
import { MotionSection } from '@/app/components/shared/Motion'
import { ROUTES } from '@/app/constants/routes'

import { allPosts, featurePost } from './Posts.config'

import styles from './Posts.module.scss'
export const Posts = () => {
  const t = useTranslations()

  return (
    <MotionSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className={styles.posts}
    >
      <div className={styles.featurePost}>
        <div className={styles.header}>
          <h3>{t('Featured Post')}</h3>
        </div>
        <div className={styles.singlePost}>
          <Post {...featurePost} />
        </div>
      </div>
      <div className={styles.allPosts}>
        <div className={styles.header}>
          <h3>{t('All posts')}</h3>
          <Link href={ROUTES.BLOG}>{t('View All')}</Link>
        </div>
        {allPosts.map(({ id, title, description, createdBy, createdDate }) => (
          <Post
            key={id}
            isPreviewPost
            createdBy={createdBy}
            createdDate={createdDate}
            description={description}
            title={title}
          />
        ))}
      </div>
    </MotionSection>
  )
}
