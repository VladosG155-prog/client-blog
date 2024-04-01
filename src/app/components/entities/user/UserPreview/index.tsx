import { FC } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { IUserPreviewProps } from './types'

import styles from './UserPreview.module.scss'

export const UserPreview: FC<IUserPreviewProps> = ({ imageUrl, name, city, isPostPage = false }) => {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Image src={imageUrl} width={48} height={48} alt='user-avatar' />
      </div>
      <div className={styles.info}>
        <h4
          className={classNames('', {
            [styles.postUser]: isPostPage
          })}
        >
          {name}
        </h4>
        <p>{city}</p>
      </div>
    </div>
  )
}
