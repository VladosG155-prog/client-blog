import { FC } from 'react'
import Image from 'next/image'

import { IUserPreviewProps } from './types'

import styles from './UserPreview.module.scss'

export const UserPreview: FC<IUserPreviewProps> = ({ imageUrl, name, city }) => {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Image src={imageUrl} alt='user-avatar' />
      </div>
      <div className={styles.info}>
        <h4>{name}</h4>
        <p>{city}</p>
      </div>
    </div>
  )
}
