'use client'
import { useState, useTransition } from 'react'
import { Button } from '@components/ui/Button'
import classNames from 'classnames'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { Modal } from '@/app/components/ui/Modal'
import { ROUTES } from '@/app/constants/routes'
import { useMediaQuery } from '@/app/hooks/useMediaQuery'
import { usePathname, useRouter } from '@/navigation'

import styles from './Header.module.scss'

export const Header = () => {
  const t = useTranslations('header')
  const router = useRouter()
  const pathname = usePathname()

  const [isShowModal, setIsShowModal] = useState(false)
  const [isOpenBurger, setIsOpenBurger] = useState(false)
  const isTablet = useMediaQuery('(max-width: 800px')

  const locale = useLocale()

  const onToggleModal = () => {
    setIsShowModal((prev) => !prev)
  }

  const toggleOpenBurger = () => {
    setIsOpenBurger((prev) => !prev)
  }

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
      {isTablet && (
        <div
          onClick={toggleOpenBurger}
          className={classNames(styles.burger, {
            [styles.active]: isOpenBurger
          })}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {((isTablet && isOpenBurger) || !isTablet) && (
        <div className={styles.headerEnd}>
          <nav data-testid='navigation' className={styles.nav}>
            <Link data-testid='navigation-home' href={ROUTES.HOME}>
              {t('Home')}
            </Link>
            <Link data-testid='navigation-blog' href={ROUTES.BLOG}>
              {t('Blog')}
            </Link>
            <Link data-testid='navigation-about_us' href={ROUTES.ABOUT_US}>
              {t('About_us')}
            </Link>
            <Link data-testid='navigation-contact' href={ROUTES.CONTACT_US}>
              {t('Contact_us')}
            </Link>
          </nav>
          <div>
            <Button variant='white' onClick={onToggleModal}>
              {t('Video about us')}
            </Button>
            <span data-testid='locale-button' onClick={onChangeLocale} className={styles.locale}>
              {params?.locale}
            </span>
          </div>
        </div>
      )}
      {isShowModal && (
        <Modal onClose={onToggleModal}>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/kgHzwb37LLE?si=SKsybQwx3SNTAYqN'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          />
        </Modal>
      )}
    </header>
  )
}
