import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SERVICES } from '@/lib/site'

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Услуги</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Один центр — все виды перевозок
            </h2>
            <p className="mt-4 text-muted-foreground text-balance">
              От срочной доставки по городу до магистральных рейсов и складского хранения.
              Подбираем транспорт и маршрут под задачу вашего бизнеса.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i}>
              <Link
                href={`/uslugi#${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
              >
                <div className="absolute right-6 top-6 text-muted-foreground/40 transition-colors group-hover:text-primary">
                  <ArrowUpRight className="size-5" />
                </div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="size-4 shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
