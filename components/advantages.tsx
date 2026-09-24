import { FileCheck2, Radar, Wallet, Headphones, ShieldCheck, Gauge } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const ITEMS = [
  {
    icon: FileCheck2,
    title: 'Работаем по договору',
    desc: 'Полный пакет документов, ЭДО, работа с НДС и без. Прозрачные условия без скрытых доплат.',
  },
  {
    icon: Radar,
    title: 'Отслеживание 24/7',
    desc: 'Видите местоположение груза и статус доставки в реальном времени на межгороде.',
  },
  {
    icon: Wallet,
    title: 'Честная цена',
    desc: 'Фиксируем стоимость в заявке. Оплата за фактический объём на сборных грузах.',
  },
  {
    icon: ShieldCheck,
    title: 'Страхование груза',
    desc: 'Ответственность перевозчика застрахована, по запросу — страховка на полную стоимость.',
  },
  {
    icon: Headphones,
    title: 'Персональный менеджер',
    desc: 'Один человек ведёт заявку от подачи до выгрузки и всегда на связи.',
  },
  {
    icon: Gauge,
    title: 'Точность по времени',
    desc: '99,4% заказов доставляются в согласованный интервал — контролируем каждый рейс.',
  },
]

export function Advantages() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Почему TRANSLINE
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                Логистика без сюрпризов и просрочек
              </h2>
              <p className="mt-4 text-muted-foreground text-balance">
                Мы отвечаем за груз на каждом этапе и строим процессы так, чтобы вы могли
                планировать поставки с точностью до часа.
              </p>
              <div className="mt-8 rounded-2xl border border-border bg-card/60 p-6">
                <p className="font-display text-4xl font-extrabold text-primary">24/7</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Диспетчерская служба принимает заявки и координирует рейсы круглосуточно,
                  включая выходные и праздники.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/40">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
