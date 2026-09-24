import { Truck } from 'lucide-react'

const ROUTES = [
  'Минск — Москва',
  'Минск — Санкт-Петербург',
  'Брест — Гомель',
  'Минск — Казань',
  'Гродно — Смоленск',
  'Минск — Астана',
  'Витебск — Москва',
  'Могилёв — Брянск',
  'Минск — Екатеринбург',
  'Брест — Варшава',
]

export function RouteTicker() {
  const doubled = [...ROUTES, ...ROUTES]
  return (
    <section className="border-y border-border bg-card/30 py-4">
      <div className="marquee-mask relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
          {doubled.map((route, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-muted-foreground">
              <Truck className="size-4 text-primary" />
              {route}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
