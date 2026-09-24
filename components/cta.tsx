import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SITE, SOCIALS } from '@/lib/site'
import { TelegramIcon } from '@/components/social-icons'

export function Cta() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-card p-8 sm:p-12">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-[90px]" aria-hidden="true" />
            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
                  Готовы перевезти ваш груз уже сегодня
                </h2>
                <p className="mt-3 text-muted-foreground text-balance">
                  Оставьте заявку — рассчитаем стоимость, подберём транспорт и подадим машину
                  в удобное время. Работаем по всей Беларуси и ЕАЭС.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  href="#calculator"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg grad-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-transform hover:-translate-y-0.5"
                >
                  Рассчитать доставку
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={SOCIALS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card/50 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-muted"
                >
                  <TelegramIcon className="size-4 text-primary" />
                  Написать в Telegram
                </a>
              </div>
            </div>
            <p className="relative mt-6 text-sm text-muted-foreground">
              Или напишите на{' '}
              <a href={`mailto:${SITE.email}`} className="font-medium text-primary hover:underline">
                {SITE.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
