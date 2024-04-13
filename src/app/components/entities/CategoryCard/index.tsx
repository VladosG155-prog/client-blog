'use client'
import { FC } from 'react'
import { Icon } from '@components/ui/Icon'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'

import { ROUTES } from '@/app/constants/routes'

import { ICategoryCardProps } from './CategoryCard.types'

import styles from './CategoryCard.module.scss'

export const CategoryCard: FC<ICategoryCardProps> = ({
  title,
  description,
  isActiveCard = false,
  iconName,
  isSmallCard = false
}) => {
  const router = useRouter()

  const onClickCard = () => {
    router.push(ROUTES.CATEGORIES + `?val=${title}`)
  }

  return (
    <div
      data-testid='category-card'
      onClick={onClickCard}
      className={classNames(styles.root, {
        [styles.row]: isSmallCard,
        [styles.active]: isActiveCard
      })}
    >
      <i className={styles.icon}>
        <Icon name={iconName} />
      </i>
      <h3>{title}</h3>
      {!isSmallCard && <p>{description}</p>}
    </div>
  )
}
