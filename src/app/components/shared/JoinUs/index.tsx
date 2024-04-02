import { Button } from '@components/ui/Button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { ROUTES } from '@/app/constants/routes'

import styles from './JoinUs.module.scss'

export const JoinUs = () => {
  const t = useTranslations('')

  return (
    <section data-testid='join-us' className={styles.root}>
      <h2>{t('Join_us')}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <Link href={ROUTES.CONTACT_US}>
        <Button variant='primary'>Join Now</Button>
      </Link>
    </section>
  )
}
