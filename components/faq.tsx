'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { FAQ_ITEMS } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Вопросы и ответы
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Отвечаем на частые вопросы
            </h2>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-10 space-y-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card/60">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold">{item.q}</span>
                    <ChevronDown
                      className={cn('size-5 shrink-0 text-primary transition-transform', isOpen && 'rotate-180')}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
