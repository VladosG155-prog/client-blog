import Image from 'next/image'

import { Button } from '@/app/components/ui/Button'

import styles from './SpecialPost.module.scss'

import specialPng from '@assets/special.png'

export const SpecialPost = () => {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Image src={specialPng} alt='specialPost' />
      </div>
      <div className={styles.info}>
        <h5>Why we started </h5>
        <h1>It started out as a simple idea and evolved into our passion</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <Button variant='primary'>Discover our story {'>'}</Button>
      </div>
    </div>
  )
}
