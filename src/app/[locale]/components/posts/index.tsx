'use client'
import { MotionSection } from '@/app/components/shared/Motion'

import styles from './Posts.module.scss'
import { Post } from '@/app/components/entities/Post'
import { useTranslations } from 'next-intl'
import { ROUTES } from '@/app/constants/routes'
import { allPosts, featurePost } from '../../config'
import Link from 'next/link'
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
          <h3>Featured Post</h3>
        </div>
        <div className={styles.singlePost}>
          <Post {...featurePost} />
        </div>
      </div>
      <div className={styles.allPosts}>
        <div className={styles.header}>
          <h3>{t('All posts')}</h3>
          <Link href={ROUTES.BLOG}>View All</Link>
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
