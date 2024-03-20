import { Button } from '@/app/components/ui/Button'

import styles from './Banner.module.scss'

export const Banner = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h4>
          Posted on <span>startup</span>
        </h4>
        <h1>Step-by-step guide to choosing great font pairs</h1>
        <p>
          By <span>James West</span> | May 23, 2022
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.
        </p>
        <Button variant='primary'>Read More {'>'} </Button>
      </div>
    </div>
  )
}
