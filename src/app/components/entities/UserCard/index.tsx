import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Icon } from '../../ui/Icon'

import { IUserCardProps } from './types'

import styles from './UserCard.module.scss'

export const UserCard: FC<IUserCardProps> = ({ imageUrl, name, jobPosition, links }) => {
  const iconKeys = Object.keys(links) as (keyof typeof links)[]

  return (
    <div className={styles.root}>
      <div className={styles.avatar}>
        <Image src={imageUrl} alt='user' />
      </div>
      <h3>{name}</h3>
      <p>{jobPosition}</p>
      <div className={styles.links}>
        {iconKeys.map((key) => (
          <Link key={key} href={links[key]}>
            <Icon key={key} name={key} />
          </Link>
        ))}
      </div>
    </div>
  )
}
