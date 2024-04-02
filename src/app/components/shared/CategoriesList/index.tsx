import { FC } from 'react'

import { CategoryCard } from '../../entities/CategoryCard'
import { iconNames } from '../../ui/Icon/config'

import { ICategoriesListProps } from './types'

import styles from './CategoriesList.module.scss'

const CATEGORIES: { id: number; iconName: keyof typeof iconNames; title: string; description: string }[] = [
  {
    id: 1,
    iconName: 'business',
    title: 'Business',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
  },
  {
    id: 2,
    iconName: 'startup',
    title: 'Startup',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
  },
  {
    id: 3,
    iconName: 'economy',
    title: 'Economy',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
  },
  {
    id: 4,
    iconName: 'technology',
    title: 'Technology',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
  }
]

export const CategoriesList: FC<ICategoriesListProps> = ({
  title,
  align = 'start',
  direction = 'row',
  isSmallCard = false,
  activeCategory = ''
}) => {
  return (
    <section data-testid='cards-list' className={styles.cards}>
      <h2 className={styles[align]}>{title}</h2>
      <div className={`${styles.wrapper} ${styles[direction]}`}>
        {CATEGORIES.map(({ title, description, iconName, id }) => (
          <CategoryCard
            isSmallCard={isSmallCard}
            isActiveCard={activeCategory === title}
            key={id}
            iconName={iconName}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  )
}
