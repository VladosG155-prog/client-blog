import Link from 'next/link'

import styles from './About.module.scss'
import { ROUTES } from '@/app/constants/routes'

export const About = () => {
  return (
    <div className={styles.root}>
      <div className={styles.lines}>
        <div></div>
        <div></div>
      </div>
      <div>
        <h5>About us</h5>
        <h2>We are a community of content writers who share their learnings</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
      <div>
        <h5>Our mision</h5>
        <h3>Creating valuable content for creatives all around the world</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      <Link href={ROUTES.BLOG + '/' + '1'}>Read More {'>'}</Link>
    </div>
  )
}
