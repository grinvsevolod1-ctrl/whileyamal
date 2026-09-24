import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
  sitemap: 'https://whileyamal.ru/sitemap.xml',
  host: 'https://whileyamal.ru',
  }
}
