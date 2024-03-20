import { useTranslations } from 'next-intl'
import styles from './page.module.scss'

export default function Index() {
  const t = useTranslations('Index')

  return (
    <main className={styles.main}>
      <h1>{t('hello')}</h1>
    </main>
  )
}
