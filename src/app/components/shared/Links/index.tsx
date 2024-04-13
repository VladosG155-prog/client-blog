import { FC } from 'react'
import Link from 'next/link'

import { Icon } from '@/app/components/ui/Icon'

import { ILinksProps } from './Links.types'

import styles from './Links.module.scss'

export const Links: FC<ILinksProps> = ({ links }) => {
  const iconKeys = Object.keys(links) as (keyof typeof links)[]

  return (
    <div data-testid='links' className={styles.root}>
      {iconKeys.map((key) => (
        <Link key={key} href={links[key]}>
          <Icon key={key} name={key} />
        </Link>
      ))}
    </div>
  )
}
