import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const REVIEWS = [
  {
    text: 'Возят нашу продукцию на маркетплейсы уже второй год. Ни одной сорванной поставки, документы всегда вовремя. Реально сняли головную боль с логистикой.',
    name: 'Ирина Ковалёва',
    role: 'Директор, производство косметики',
  },
  {
    text: 'Нужен был срочный реф на медикаменты — подали машину за час, температуру держали идеально. Менеджер был на связи всю дорогу.',
    name: 'Андрей Сащеко',
    role: 'Логист, фармдистрибуция',
  },
  {
    text: 'Перевозили негабаритное оборудование Минск — Казань. Всё оформили с разрешениями, сопровождение на месте. Профессиональный подход.',
    name: 'Дмитрий Лис',
    role: 'Снабжение, машиностроение',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Отзывы</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Нам доверяют перевозки
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6">
                <Quote className="size-8 text-primary/40" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  {r.text}
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-sm text-muted-foreground">{r.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
