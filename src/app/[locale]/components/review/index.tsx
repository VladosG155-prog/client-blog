'use client'
import { useState } from 'react'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'

import { UserPreview } from '@/app/components/entities/user/UserPreview'
import { Icon } from '@/app/components/ui/Icon'

import { slides } from './Review.config'

import styles from './Review.module.scss'

export const Review = () => {
  const [activeSlide, setActiveSlide] = useState(1)

  const t = useTranslations('slider')

  const handleClickNext = () => {
    if (activeSlide === slides.length) {
      setActiveSlide(1)
    } else {
      setActiveSlide((prev) => (prev += 1))
    }
  }
  const handleClickPrev = () => {
    if (activeSlide === 1) {
      setActiveSlide(slides.length)
    } else {
      setActiveSlide((prev) => (prev -= 1))
    }
  }

  return (
    <section className={styles.root}>
      <div className={styles.firstSection}>
        <h5>{t('review')}</h5>
        <h2>{t('what_say')}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.slider}>
          <div className={styles.wrapper}>
            {slides.map(
              ({ id, imageUrl, name, city, text }) =>
                activeSlide === id && (
                  <div key={id} className={classNames(styles.slideItem, { [styles.active]: activeSlide === id })}>
                    <h4 className={styles.slideText}>{text}</h4>
                    <UserPreview imageUrl={imageUrl.src} name={name} city={city} />
                  </div>
                )
            )}
          </div>
          <div className={styles.navigation}>
            <button onClick={handleClickPrev} className={styles.prev}>
              <Icon name='prevArrow' />
            </button>
            <button className={styles.disabledArrow} onClick={handleClickNext}>
              <Icon name='nextArrow' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
