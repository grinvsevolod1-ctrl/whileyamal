import type { Metadata, Viewport } from 'next'
import { Manrope, Sora } from 'next/font/google'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

  const SITE_URL = 'https://whileyamal.ru'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TRANSLINE — грузоперевозки и логистика по Беларуси, РФ и ЕАЭС',
    template: '%s — TRANSLINE',
  },
  description:
    'Логистический центр грузоперевозок TRANSLINE: доставка по городу, межгород, сборные грузы, рефрижераторы, негабарит, склад и фулфилмент. Расчёт стоимости онлайн, договор, страховка груза.',
  keywords: [
    'грузоперевозки',
    'логистика',
    'доставка грузов',
    'перевозка грузов Беларусь',
    'сборные грузы',
    'межгород',
    'рефрижератор',
    'негабаритные грузы',
    'склад ответственного хранения',
    'фулфилмент',
  ],
  authors: [{ name: 'TRANSLINE' }],
  openGraph: {
    type: 'website',
    locale: 'ru_BY',
    url: SITE_URL,
    siteName: 'TRANSLINE',
    title: 'TRANSLINE — логистический центр грузоперевозок',
    description:
      'Доставка по городу и межгород, сборные грузы, рефрижераторы, негабарит, склад и фулфилмент. Расчёт онлайн, договор, страховка.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'TRANSLINE — грузоперевозки и логистика' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRANSLINE — логистический центр грузоперевозок',
    description: 'Доставка по городу и межгород, сборные грузы, рефрижераторы, негабарит, склад.',
    images: ['/og.png'],
  },
  alternates: { canonical: SITE_URL },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e17',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${sora.variable}`}>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
