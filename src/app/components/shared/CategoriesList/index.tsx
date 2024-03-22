import { FC } from 'react'

import { CategoryCard } from '../../entities/CategoryCard'

import { ICategoriesListProps } from './types'

import styles from './CategoriesList.module.scss'

export const CategoriesList: FC<ICategoriesListProps> = ({ title, align = 'start' }) => {
  return (
    <section className={styles.cards}>
      <h2 className={styles[align]}>{title}</h2>
      <div className={styles.wrapper}>
        <CategoryCard
          iconName='business'
          title='Business'
          description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        />
        <CategoryCard
          iconName='startup'
          title='Startup'
          description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        />
        <CategoryCard
          iconName='economy'
          title='Economy'
          description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        />
        <CategoryCard
          iconName='tech'
          title='Technology'
          description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        />
      </div>
    </section>
  )
}
