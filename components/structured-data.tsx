import { SITE, SOCIALS, FAQ_ITEMS } from '@/lib/site'

export function StructuredData() {
  const graph = [
    {
      '@type': ['Organization', 'MovingCompany'],
      '@id': `${SITE.url}/#org`,
      name: SITE.name,
      description: SITE.legal,
      url: SITE.url,
      email: SITE.email,
      areaServed: ['BY', 'RU', 'KZ'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.city,
        addressCountry: 'BY',
      },
      sameAs: [SOCIALS.telegram],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: 'ru-BY',
      publisher: { '@id': `${SITE.url}/#org` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE.url}/#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  const json = { '@context': 'https://schema.org', '@graph': graph }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
