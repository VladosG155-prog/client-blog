import Image from 'next/image'

import { Button } from '@/app/components/ui/Button'

import styles from './SpecialPost.module.scss'

import specialPng from '@assets/special.png'
import { useTranslations } from 'next-intl'

export const SpecialPost = () => {
  const t = useTranslations()

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Image src={specialPng} alt='specialPost' />
      </div>
      <div className={styles.info}>
        <h5>{t('why we started')}</h5>
        <h1>{t('It started out as a simple idea and evolved into our passion')}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <Button variant='primary'>
          {t('Discover our story')} {'>'}
        </Button>
      </div>
    </div>
  )
}
