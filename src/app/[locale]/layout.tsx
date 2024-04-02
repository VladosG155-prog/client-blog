import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter, Sen } from 'next/font/google'
import { NextIntlClientProvider, useMessages } from 'next-intl'

import '../styles/index.scss'
import { Footer } from '../components/shared/Footer'
import { Header } from '../components/shared/Header'

const inter = Inter({ subsets: ['latin'], weight: ['900', '700', '400', '500'], variable: '--font-inter' })
const sen = Sen({ subsets: ['latin'], weight: ['700', '400', '500'], variable: '--font-sen' })

export const metadata: Metadata = {
  title: 'Modsen client blog',
  description: 'The popular blog'
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: ReactNode
  params: { locale: string }
}>) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true} className={`${inter.variable} ${sen.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div className='container'>{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
