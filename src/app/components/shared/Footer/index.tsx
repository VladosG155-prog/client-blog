import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { ROUTES } from '@/app/constants/routes'

import { MailForm } from './MailForm'

import styles from './Footer.module.scss'

export const Footer = () => {
  const t = useTranslations('header')

  return (
    <footer className={styles.root}>
      <div className={styles.footerFirst}>
        <h4>Modsen Client Blog</h4>
        <nav className={styles.nav}>
          <Link href={ROUTES.HOME}>{t('Home')}</Link>
          <Link href={ROUTES.BLOG}>{t('Blog')}</Link>
          <Link href={ROUTES.ABOUT_US}>{t('About_us')}</Link>
          <Link href={ROUTES.CONTACT_US}>{t('Contact_us')}</Link>
          <Link href={ROUTES.PRIVACY_POLICY}>{t('Privacy_policy')}</Link>
        </nav>
      </div>
      <MailForm />
    </footer>
  )
}
