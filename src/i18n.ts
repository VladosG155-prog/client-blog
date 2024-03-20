import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

const locales = ['en', 'ru']

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as 'en' | 'ru')) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  }
})
