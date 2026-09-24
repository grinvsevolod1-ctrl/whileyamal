import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, BadgeRussianRuble, Check, Sparkles } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { CareerForm } from '@/components/career-form'
import { VACANCIES, PERKS, SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Вакансии — работа водителем и логистом в TRANSLINE',
  description:
    'Работа в логистическом центре TRANSLINE: водители кат. B, C, CE/E, экспедиторы, кладовщики и стажёры без опыта. Белая зарплата, еженедельные выплаты, свежий автопарк, топливные карты. Откликайтесь онлайн.',
  alternates: { canonical: 'https://transline.by/vacancies' },
}

export default function VacanciesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-28 sm:pt-32">
        <section className="relative overflow-hidden pb-14">
          <div className="absolute inset-0 -z-10">
            <Image src="/careers-highway.png" alt="" fill className="object-cover opacity-25" aria-hidden="true" />
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
              <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="size-3.5" /> Открыт набор в команду
              </span>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl">
                Работа в логистическом центре {SITE.name}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-balance">
                Присоединяйтесь к команде профессионалов. Белая зарплата, стабильные рейсы и
                свежий автопарк — берём как опытных водителей, так и стажёров без опыта.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 rounded-lg grad-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
                >
                  Откликнуться
                </Link>
                <Link
                  href="#vacancies"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background/40 px-6 py-3 text-base font-semibold transition-colors hover:border-primary/50"
                >
                  Смотреть вакансии
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="vacancies" className="scroll-mt-28 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Открытые вакансии</h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {VACANCIES.map((v, i) => (
                <Reveal key={v.title} delay={i % 3}>
                  <article className="flex h-full flex-col rounded-3xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-bold tracking-tight text-balance">{v.title}</h3>
                    </div>
                    <p className="mt-2 inline-flex items-center gap-1.5 font-display text-xl font-extrabold text-primary">
                      <BadgeRussianRuble className="size-5" />
                      {v.salary}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground text-balance">{v.desc}</p>
                    <ul className="mt-4 space-y-2 border-t border-border pt-4">
                      {v.reqs.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                          <span className="text-foreground/85">{r}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#apply"
                      className="mt-5 inline-flex items-center justify-center rounded-lg border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
                    >
                      Откликнуться
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Почему у нас хорошо</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PERKS.map((p, i) => (
                <Reveal key={p.title} delay={i % 4}>
                  <div className="h-full rounded-2xl border border-border bg-card/50 p-5">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      <Check className="size-5" />
                    </div>
                    <h3 className="mt-3 font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground text-balance">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="scroll-mt-28 pb-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card/60 p-6 sm:p-8">
                <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">Отклик на вакансию</h2>
                <p className="mt-2 text-muted-foreground text-balance">
                  Заполните форму — рекрутер перезвонит, ответит на вопросы и пригласит на собеседование.
                </p>
                <CareerForm className="mt-6" />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
