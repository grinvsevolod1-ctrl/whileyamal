import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/hero'
import { RouteTicker } from '@/components/route-ticker'
import { Services } from '@/components/services'
import { Advantages } from '@/components/advantages'
import { Coverage } from '@/components/coverage'
import { Directions } from '@/components/directions'
import { Fleet } from '@/components/fleet'
import { Process } from '@/components/process'
import { Calculator } from '@/components/calculator'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { Contacts } from '@/components/contacts'
import { Cta } from '@/components/cta'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <RouteTicker />
        <Services />
        <Advantages />
        <Coverage />
        <Directions />
        <Fleet />
        <Process />
        <Calculator />
        <Testimonials />
        <Faq />
        <Contacts />
        <Cta />
      </main>
      <SiteFooter />
    </>
  )
}
