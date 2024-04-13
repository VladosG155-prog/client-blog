import { FC } from 'react'
import { Button } from '@components/ui/Button'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { ROUTES } from '@/app/constants/routes'

import { IPostProps } from './Post.types'

import styles from './Post.module.scss'

export const Post: FC<IPostProps> = ({
  title,
  image,
  description,
  createdBy,
  createdDate,
  isPreviewPost = false,
  size = 'lg'
}) => {
  const t = useTranslations()

  return (
    <div
      className={classNames(styles.root, {
        [styles.preview]: isPreviewPost,
        [styles.medium]: size === 'md'
      })}
    >
      {image && !isPreviewPost && <Image width={100} height={100} src={image} alt='post' />}
      <p className={styles.info}>
        By <Link href='/'>{createdBy}</Link> | {createdDate}
      </p>
      <h3>{title}</h3>
      {!isPreviewPost && <p className={styles.description}>{description}</p>}
      {!isPreviewPost && size === 'lg' && (
        <Button variant='primary'>
          <Link href={ROUTES.BLOG + '/' + 1}>
            {t('Read more')} {'>'}{' '}
          </Link>
        </Button>
      )}
    </div>
  )
}
