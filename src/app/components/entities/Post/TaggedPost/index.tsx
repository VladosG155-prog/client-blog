import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { ROUTES } from '@/app/constants/routes'

import { ITaggedPostProps } from './types'

import styles from './TaggedPost.module.scss'

export const TaggedPost: FC<ITaggedPostProps> = ({ id, imageUrl, category, title, description }) => {
  const t = useTranslations()

  return (
    <Link href={ROUTES.BLOG + '/' + id}>
      <div className={styles.root}>
        <Image src={imageUrl} alt='post with tag' width={490} height={320} />
        <div className={styles.info}>
          <p className={styles.tag}>{category}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}
