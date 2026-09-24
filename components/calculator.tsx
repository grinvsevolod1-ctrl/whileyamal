'use client'

import { useMemo, useState } from 'react'
import { Calculator as CalcIcon, Truck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { LeadForm } from '@/components/lead-form'
import { cn } from '@/lib/utils'

type Mode = 'city' | 'intercity'

const VEHICLES = [
  { id: 'van', label: 'Фургон до 1,5 т', base: 90, perKm: 0.9, cap: 1.5 },
  { id: 'iso', label: 'Изотерм до 5 т', base: 150, perKm: 1.3, cap: 5 },
  { id: 'tent10', label: 'Тент 10 т', base: 220, perKm: 1.7, cap: 10 },
  { id: 'truck20', label: 'Фура 20 т', base: 340, perKm: 2.2, cap: 20 },
] as const

const BYN = (n: number) =>
  new Intl.NumberFormat('ru-BY', { maximumFractionDigits: 0 }).format(Math.round(n)) + ' Br'

export function Calculator() {
  const [mode, setMode] = useState<Mode>('intercity')
  const [vehicleId, setVehicleId] = useState<string>('tent10')
  const [distance, setDistance] = useState(300)
  const [weight, setWeight] = useState(6)
  const [loaders, setLoaders] = useState(0)
  const [tailLift, setTailLift] = useState(false)
  const [urgent, setUrgent] = useState(false)
  const [roundTrip, setRoundTrip] = useState(false)

  const vehicle = VEHICLES.find((v) => v.id === vehicleId) ?? VEHICLES[2]

  const breakdown = useMemo(() => {
    const lines: { label: string; value: number }[] = []
    lines.push({ label: `Подача · ${vehicle.label}`, value: vehicle.base })

    const km = mode === 'city' ? Math.min(distance, 60) : distance
    const mileage = km * vehicle.perKm
    lines.push({ label: `Пробег · ${km} км × ${vehicle.perKm} Br`, value: mileage })

    if (weight > vehicle.cap) {
      const over = (weight - vehicle.cap) * 25
      lines.push({ label: `Перевес · ${(weight - vehicle.cap).toFixed(1)} т`, value: over })
    }
    if (loaders > 0) {
      lines.push({ label: `Грузчики · ${loaders} чел.`, value: loaders * 45 })
    }
    if (tailLift) lines.push({ label: 'Гидроборт', value: 60 })

    let subtotal = lines.reduce((s, l) => s + l.value, 0)
    if (urgent) {
      const add = subtotal * 0.2
      lines.push({ label: 'Срочная подача +20%', value: add })
      subtotal += add
    }
    if (roundTrip) {
      const add = subtotal * 0.7
      lines.push({ label: 'Туда-обратно ×1.7', value: add })
      subtotal += add
    }
    return { lines, total: subtotal }
  }, [vehicle, mode, distance, weight, loaders, tailLift, urgent, roundTrip])

  const meta = {
    Режим: mode === 'city' ? 'По городу' : 'Межгород',
    Транспорт: vehicle.label,
    Расстояние: `${distance} км`,
    Вес: `${weight} т`,
    Грузчики: String(loaders),
    Гидроборт: tailLift ? 'да' : 'нет',
    Срочно: urgent ? 'да' : 'нет',
    'Туда-обратно': roundTrip ? 'да' : 'нет',
    'Оценка стоимости': BYN(breakdown.total),
  }

  const control =
    'w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30'

  return (
    <section id="calculator" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <CalcIcon className="size-6" />
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Калькулятор стоимости
            </h2>
            <p className="mt-4 text-muted-foreground text-balance">
              Настройте параметры перевозки и получите предварительную стоимость за минуту.
              Точную цену подтвердит менеджер.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/60 p-6">
              <div className="inline-flex rounded-lg border border-border bg-background/40 p-1">
                {(['city', 'intercity'] as Mode[]).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    className={cn(
                      'rounded-md px-4 py-1.5 text-sm font-medium transition-colors',
                      mode === m ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {m === 'city' ? 'По городу' : 'Межгород'}
                  </button>
                ))}
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <label htmlFor="calc-vehicle" className="mb-1.5 block text-sm font-medium">
                    Транспорт
                  </label>
                  <select id="calc-vehicle" value={vehicleId} onChange={(e) => setVehicleId(e.target.value)} className={control}>
                    {VEHICLES.map((v) => (
                      <option key={v.id} value={v.id} className="bg-card">
                        {v.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="calc-distance" className="mb-1.5 flex items-center justify-between text-sm font-medium">
                    <span>Расстояние</span>
                    <span className="text-primary">{mode === 'city' ? Math.min(distance, 60) : distance} км</span>
                  </label>
                  <input
                    id="calc-distance"
                    type="range"
                    min={mode === 'city' ? 5 : 50}
                    max={mode === 'city' ? 60 : 2000}
                    step={mode === 'city' ? 5 : 10}
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <div>
                  <label htmlFor="calc-weight" className="mb-1.5 flex items-center justify-between text-sm font-medium">
                    <span>Вес груза</span>
                    <span className="text-primary">{weight} т</span>
                  </label>
                  <input
                    id="calc-weight"
                    type="range"
                    min={0.5}
                    max={22}
                    step={0.5}
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <div>
                  <label htmlFor="calc-loaders" className="mb-1.5 flex items-center justify-between text-sm font-medium">
                    <span>Грузчики</span>
                    <span className="text-primary">{loaders} чел.</span>
                  </label>
                  <input
                    id="calc-loaders"
                    type="range"
                    min={0}
                    max={4}
                    step={1}
                    value={loaders}
                    onChange={(e) => setLoaders(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {[
                    { label: 'Гидроборт', v: tailLift, set: setTailLift },
                    { label: 'Срочно', v: urgent, set: setUrgent },
                    { label: 'Туда-обратно', v: roundTrip, set: setRoundTrip },
                  ].map((o) => (
                    <button
                      key={o.label}
                      type="button"
                      onClick={() => o.set(!o.v)}
                      className={cn(
                        'rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors',
                        o.v
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border bg-background/40 text-muted-foreground hover:text-foreground',
                      )}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="flex items-center gap-2 font-display font-bold">
                <Truck className="size-5 text-primary" /> Предварительный расчёт
              </h3>
              <ul className="mt-4 space-y-2.5">
                {breakdown.lines.map((l, i) => (
                  <li key={i} className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-muted-foreground">{l.label}</span>
                    <span className="font-medium tabular-nums">{BYN(l.value)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                <span className="text-sm text-muted-foreground">Итого ориентировочно</span>
                <span className="font-display text-3xl font-extrabold text-primary">{BYN(breakdown.total)}</span>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-background/40 p-4">
                <p className="mb-3 text-sm font-semibold">Зафиксировать расчёт</p>
                <LeadForm type="calculator" meta={meta} submitLabel="Получить точную цену" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
