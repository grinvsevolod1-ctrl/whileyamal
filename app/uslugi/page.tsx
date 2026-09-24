import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ArrowRight, ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { Cta } from '@/components/cta'
import { SERVICES } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Каталог услуг — грузоперевозки и складская логистика',
  description:
    'Полный каталог услуг TRANSLINE: доставка по городу, межгород и магистраль, сборные грузы, рефрижераторы, негабарит, склад и фулфилмент. Условия и что входит в каждую услугу.',
  alternates: { canonical: 'https://whileyamal.ru/uslugi' },
}

const DETAILS: Record<string, string[]> = {
  gorod: [
    'Подача фургонов и малотоннажников от 60 минут',
    'Работа с точками доставки по графику магазинов',
    'Экспедирование, грузчики и подъём на этаж',
    'Оплата наличными, картой, по счёту и через ЭДО',
  ],
  mezhgorod: [
    'Прямые и попутные рейсы по Беларуси, РФ и ЕАЭС',
    'Отслеживание груза в реальном времени 24/7',
    'Полный пакет документов: договор, ТТН, счёт, акт',
    'Персональный менеджер на всём маршруте',
  ],
  sbornye: [
    'Отправка партий от одной паллеты',
    'Оплата только за фактический объём и вес',
    'Консолидация грузов на складе-хабе',
    'Регулярные рейсы по расписанию',
  ],
  refrizerator: [
    'Температурный режим от −25 до +12 °C',
    'Контроль и запись температуры в пути',
    'Санитарная обработка и паспорта на транспорт',
    'Перевозка продуктов, медикаментов, цветов',
  ],
  negabarit: [
    'Тралы, низкорамники и площадки до 60 т',
    'Оформление разрешений и согласование маршрута',
    'Такелажные работы и погрузка спецтехникой',
    'Сопровождение и охрана груза при необходимости',
  ],
  sklad: [
    'Ответственное хранение на складах класса B+',
    'Приёмка, учёт и инвентаризация товара',
    'Упаковка, маркировка и комплектация заказов',
    'Отгрузка поставок на Wildberries, Ozon и в розницу',
  ],
}

export default function UslugiPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-28 sm:pt-32">
        <section className="relative overflow-hidden pb-14">
          <div className="absolute inset-0 -z-10">
            <Image src="/warehouse.png" alt="" fill className="object-cover opacity-20" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> На главную
            </Link>
            <Reveal>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl">
                Каталог услуг логистического центра
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-balance">
                Полный спектр грузоперевозок и складской логистики под ключ. Выберите нужную
                услугу — расскажем условия и рассчитаем стоимость.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i % 3}>
                <article
                  id={s.slug}
                  className="scroll-mt-28 rounded-3xl border border-border bg-card/60 p-6 sm:p-8"
                >
                  <div className="grid gap-6 lg:grid-cols-[auto_1fr_1.1fr] lg:items-start lg:gap-10">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      <s.icon className="size-7" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-extrabold tracking-tight">{s.title}</h2>
                      <p className="mt-3 text-muted-foreground text-balance">{s.desc}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {s.points.map((p) => (
                          <span
                            key={p}
                            className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-medium text-foreground/80"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-2.5 rounded-2xl border border-border bg-background/40 p-5">
                      {(DETAILS[s.slug] ?? []).map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm">
                          <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                          <span className="text-foreground/85">{d}</span>
                        </li>
                      ))}
                      <li className="pt-2">
                        <Link
                          href="/#calculator"
                          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                        >
                          Рассчитать стоимость
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <Cta />
      </main>
      <SiteFooter />
    </>
  )
}
