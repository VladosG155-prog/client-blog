import { FC } from 'react'

import { Icon } from '../../ui/Icon'

import { ICategoryCardProps } from './types'

import styles from './CategoryCard.module.scss'

export const CategoryCard: FC<ICategoryCardProps> = ({ title, description, iconName }) => {
  return (
    <div className={styles.root}>
      <i className={styles.icon}>
        <Icon name={iconName} />
      </i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
