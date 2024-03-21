import { FC } from 'react'
import Image from 'next/image'

import { IUserPreviewProps } from './types'

import styles from './UserPreview.module.scss'

export const UserPreview: FC<IUserPreviewProps> = ({ imageUrl, name, city }) => {
  return (
    <div className={styles.root}>
      <Image src={imageUrl} alt='user-avatar' />
      <div className={styles.info}>
        <h4>{name}</h4>
        <p>{city}</p>
      </div>
    </div>
  )
}
