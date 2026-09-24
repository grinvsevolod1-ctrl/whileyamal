import { Reveal } from '@/components/reveal'
import { FLEET } from '@/lib/site'

export function Fleet() {
  return (
    <section id="fleet" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Автопарк</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Транспорт под любой груз
            </h2>
            <p className="mt-4 text-muted-foreground text-balance">
              Собственный и проверенный партнёрский автопарк — от малотоннажных фургонов до
              тралов и складских комплексов.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FLEET.map((f, i) => (
            <Reveal key={f.name} delay={i}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <f.icon className="size-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h3 className="font-display font-bold">{f.name}</h3>
                    <span className="text-xs font-semibold text-accent">{f.cap}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
