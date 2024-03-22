import { FC } from 'react'
import Image from 'next/image'

import { ITaggedPostProps } from './types'

import styles from './TaggedPost.module.scss'

export const TaggedPost: FC<ITaggedPostProps> = ({ imageUrl, tag, title, description }) => {
  return (
    <div className={styles.root}>
      <Image src={imageUrl} alt='post with tag' />
      <div className={styles.info}>
        <p className={styles.tag}>{tag}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
