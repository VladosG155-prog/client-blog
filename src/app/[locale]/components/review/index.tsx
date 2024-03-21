'use client'
import { useState } from 'react'
import classNames from 'classnames'

import { UserPreview } from '@/app/components/entities/user/UserPreview'
import { Icon } from '@/app/components/ui/Icon'

import { slides } from './config'

import styles from './Review.module.scss'

export const Review = () => {
  const [activeSlide, setActiveSlide] = useState(1)

  const handleClickNext = () => {
    if (activeSlide === slides.length) {
      setActiveSlide(1)
    } else {
      setActiveSlide((prev) => (prev += 1))
    }
  }
  const handleClickPrev = () => {
    if (activeSlide === 1) {
      setActiveSlide((prev) => (prev -= 1))
    } else {
      setActiveSlide(slides.length)
    }
  }
  console.log(activeSlide)

  return (
    <section className={styles.root}>
      <div className={styles.firstSection}>
        <h5>Testimonials</h5>
        <h2>What people say about our blog</h2>
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
                    <UserPreview imageUrl={imageUrl} name={name} city={city} />
                  </div>
                )
            )}
          </div>
          <div className={styles.navigation}>
            <button onClick={handleClickPrev} className={styles.prev}>
              <Icon name='prevArrow' />
            </button>
            <button onClick={handleClickNext}>
              <Icon name='nextArrow' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
