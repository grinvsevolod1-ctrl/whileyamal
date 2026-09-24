'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Clock, MapPin, ArrowRight } from 'lucide-react'
import { Counter } from '@/components/counter'
import { STATS } from '@/lib/site'

const badges = [
  { icon: ShieldCheck, text: 'Страховка груза' },
  { icon: Clock, text: 'Подача от 60 минут' },
  { icon: MapPin, text: 'Беларусь · РФ · ЕАЭС' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 top-40 h-[360px] w-[360px] rounded-full bg-accent/15 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-primary" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Принимаем заявки круглосуточно
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Грузоперевозки, которые{' '}
            <span className="bg-gradient-to-r from-primary via-amber-300 to-accent bg-clip-text text-transparent">
              приходят вовремя
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance"
          >
            Логистический центр TRANSLINE берёт на себя весь путь груза — от подачи машины
            до отгрузки на складе. Город, межгород, сборные и рефрижераторные перевозки под
            договор и с полной страховкой.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#calculator"
              className="group inline-flex items-center gap-2 rounded-lg grad-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              Рассчитать стоимость
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-muted"
            >
              Все услуги
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
          >
            {badges.map((b) => (
              <li key={b.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <b.icon className="size-4 text-primary" />
                {b.text}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl">
            <Image
              src="/hero-truck.png"
              alt="Магистральный тягач TRANSLINE на трассе в сумерках"
              width={720}
              height={560}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-border bg-card/90 p-4 backdrop-blur-xl shadow-xl">
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <dt className="font-display text-xl font-extrabold text-primary sm:text-2xl">
                    <Counter value={s.value} suffix={s.suffix} decimals={(s as { decimals?: number }).decimals ?? 0} />
                  </dt>
                  <dd className="mt-1 text-[0.7rem] leading-tight text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
