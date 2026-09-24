'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'

const NODES = [
  { x: 120, y: 210, label: 'Минск', hub: true },
  { x: 60, y: 150, label: 'Вильнюс' },
  { x: 90, y: 300, label: 'Брест' },
  { x: 200, y: 270, label: 'Гомель' },
  { x: 210, y: 120, label: 'Витебск' },
  { x: 340, y: 150, label: 'Москва' },
  { x: 300, y: 60, label: 'СПб' },
  { x: 470, y: 200, label: 'Казань' },
  { x: 560, y: 260, label: 'Астана' },
]

const HUB = NODES[0]

export function Coverage() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                География доставки
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                Из Минска — по всему ЕАЭС
              </h2>
              <p className="mt-4 text-muted-foreground text-balance">
                Собственный хаб в Минске и партнёрская сеть позволяют доставлять грузы по
                Беларуси, России, Казахстану и странам Евросоюза с единым договором и контролем.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  ['6', 'стран доставки'],
                  ['120+', 'городов в сети'],
                  ['8 000 м²', 'складов'],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-xl border border-border bg-card/60 p-4">
                    <dt className="font-display text-2xl font-extrabold text-primary">{v}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="relative rounded-2xl border border-border bg-card/40 p-4">
              <svg viewBox="0 0 620 360" className="h-auto w-full" role="img" aria-label="Схема маршрутов доставки">
                {NODES.slice(1).map((n, i) => {
                  const d = `M ${HUB.x} ${HUB.y} Q ${(HUB.x + n.x) / 2} ${Math.min(HUB.y, n.y) - 50} ${n.x} ${n.y}`
                  return (
                    <motion.path
                      key={i}
                      d={d}
                      fill="none"
                      stroke="url(#routeGrad)"
                      strokeWidth={1.5}
                      strokeDasharray="6 6"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: i * 0.12, ease: 'easeInOut' }}
                    />
                  )
                })}
                {NODES.map((n, i) => (
                  <g key={n.label}>
                    {n.hub && (
                      <circle cx={n.x} cy={n.y} r={16} className="fill-primary/20">
                        <animate attributeName="r" values="12;20;12" dur="2.6s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.6s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <motion.circle
                      cx={n.x}
                      cy={n.y}
                      r={n.hub ? 7 : 4.5}
                      className={n.hub ? 'fill-primary' : 'fill-accent'}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08, type: 'spring', stiffness: 260 }}
                      style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                    />
                    <text
                      x={n.x}
                      y={n.y - (n.hub ? 14 : 11)}
                      textAnchor="middle"
                      className={`fill-foreground text-[11px] ${n.hub ? 'font-bold' : 'font-medium'}`}
                    >
                      {n.label}
                    </text>
                  </g>
                ))}
                <defs>
                  <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="oklch(0.74 0.17 55)" />
                    <stop offset="100%" stopColor="oklch(0.78 0.13 205)" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="px-2 pb-1 text-center text-[0.7rem] text-muted-foreground">
                Схема носит иллюстративный характер
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
