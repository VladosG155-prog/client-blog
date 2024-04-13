import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Links } from '@/app/components/shared/Links'
import { ROUTES } from '@/app/constants/routes'

import { IUserCardProps } from './UserCard.types'

import styles from './UserCard.module.scss'

export const UserCard: FC<IUserCardProps> = ({ id, imageUrl, name, jobPosition, links }) => {
  return (
    <div className={styles.root}>
      <Link data-testid='user-link' role='link' className={styles.cardLink} href={ROUTES.AUTHORS + '/' + id} />
      <div className={styles.avatar}>
        <Image width={128} height={128} src={imageUrl} alt='user' />
      </div>
      <h3>{name}</h3>
      <p>{jobPosition}</p>
      <div className={styles.links}>
        <Links links={links} />
      </div>
    </div>
  )
}
