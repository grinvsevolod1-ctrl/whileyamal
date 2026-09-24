import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    n: '01',
    title: 'Заявка и расчёт',
    desc: 'Оставляете заявку или считаете стоимость в калькуляторе. Менеджер подтверждает детали за 15 минут.',
  },
  {
    n: '02',
    title: 'Договор и подача',
    desc: 'Фиксируем условия в договоре, подбираем транспорт и подаём машину в согласованный интервал.',
  },
  {
    n: '03',
    title: 'Перевозка под контролем',
    desc: 'Груз в пути под наблюдением диспетчера. Вы получаете статусы и можете отслеживать маршрут.',
  },
  {
    n: '04',
    title: 'Выгрузка и документы',
    desc: 'Выгружаем груз, закрываем сделку полным пакетом документов и ЭДО. Всё прозрачно.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Как мы работаем
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Четыре шага до доставки
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i}>
              <div className="relative h-full rounded-2xl border border-border bg-card/60 p-6">
                <span className="font-display text-4xl font-extrabold text-primary/25">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
