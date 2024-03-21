'use client'
import { useTransition } from 'react'
import { Button } from '@components/ui/Button'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { ROUTES } from '@/app/constants/routes'
import { usePathname, useRouter } from '@/navigation'

import styles from './header.module.scss'

export const Header = () => {
  const t = useTranslations('header')
  const router = useRouter()
  const pathname = usePathname()

  const locale = useLocale()

  const [isPending, startTransition] = useTransition()
  const params = useParams()
  const onChangeLocale = () => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: locale === 'ru' ? 'en' : 'ru' }
      )
    })
  }

  return (
    <header className={styles.header}>
      <h4>Modsen Client Blog</h4>
      <div className={styles.headerEnd}>
        <nav className={styles.nav}>
          <Link href={ROUTES.HOME}>{t('Home')}</Link>
          <Link href={ROUTES.BLOG}>{t('Blog')}</Link>
          <Link href={ROUTES.ABOUT_US}>{t('About_us')}</Link>
          <Link href={ROUTES.CONTACT_US}>{t('Contact_us')}</Link>
        </nav>
        <Button variant='white' onClick={onChangeLocale}>
          {t('Video about us')}
        </Button>
      </div>
    </header>
  )
}
