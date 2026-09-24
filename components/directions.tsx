import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { DIRECTIONS } from '@/lib/site'

export function Directions() {
  return (
    <section id="directions" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Тарифы и направления
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Популярные маршруты
            </h2>
            <p className="mt-4 text-muted-foreground text-balance">
              Ориентировочная стоимость магистральной перевозки отдельной машиной. Точную цену
              рассчитаем в калькуляторе или по вашей заявке.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card/60">
            <div className="hidden grid-cols-[1.5fr_1fr_1fr_1fr] gap-4 border-b border-border bg-muted/40 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:grid">
              <span>Направление</span>
              <span>Расстояние</span>
              <span>Срок</span>
              <span className="text-right">Стоимость</span>
            </div>
            <ul>
              {DIRECTIONS.map((d) => (
                <li
                  key={d.route}
                  className="grid grid-cols-2 gap-2 border-b border-border px-6 py-4 transition-colors last:border-0 hover:bg-muted/30 sm:grid-cols-[1.5fr_1fr_1fr_1fr] sm:gap-4 sm:py-5"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <ArrowRight className="size-4 shrink-0 text-primary" />
                    {d.route}
                  </span>
                  <span className="text-sm text-muted-foreground sm:self-center">
                    <span className="sm:hidden">Расстояние: </span>
                    {d.distance}
                  </span>
                  <span className="text-sm text-muted-foreground sm:self-center">
                    <span className="sm:hidden">Срок: </span>
                    {d.term}
                  </span>
                  <span className="font-display font-bold text-primary sm:self-center sm:text-right">
                    {d.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Цены указаны ориентировочно и не являются публичной офертой.
        </p>
      </div>
    </section>
  )
}
