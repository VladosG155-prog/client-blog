import { FC } from 'react'
import { Button } from '@components/ui/Button'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import { IPostProps } from './types'

import styles from './Post.module.scss'

export const Post: FC<IPostProps> = ({ title, image, description, createdBy, createdDate, isPreviewPost = false }) => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.preview]: isPreviewPost
      })}
    >
      {image && !isPreviewPost && <Image src={image} alt='post' objectFit='contain' />}
      <p className={styles.info}>
        By <Link href='/'>{createdBy}</Link> | {createdDate}
      </p>
      <h3>{title}</h3>
      {!isPreviewPost && <p>{description}</p>}
      {!isPreviewPost && <Button variant='primary'>Read More {'>'} </Button>}
    </div>
  )
}
