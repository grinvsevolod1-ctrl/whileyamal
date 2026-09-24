'use client'

import { useState, type FormEvent } from 'react'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { VACANCIES } from '@/lib/site'

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputCls =
  'w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30'

export function CareerForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    const form = e.currentTarget
    const fd = new FormData(form)

    const name = String(fd.get('name') || '').trim()
    const phone = String(fd.get('phone') || '').trim()

    if (name.length < 2) {
      setStatus('error')
      setError('Укажите имя')
      return
    }
    if (phone.replace(/\D/g, '').length < 9) {
      setStatus('error')
      setError('Укажите корректный телефон')
      return
    }

    const payload = {
      type: 'career',
      name,
      phone,
      comment: String(fd.get('comment') || '').trim(),
      meta: {
        Город: String(fd.get('city') || '—').trim() || '—',
        Возраст: String(fd.get('age') || '—').trim() || '—',
        Вакансия: String(fd.get('position') || '—'),
        Стаж: String(fd.get('experience') || '—'),
        Категории: String(fd.get('license') || '—').trim() || '—',
        'Свой автомобиль': fd.get('ownCar') ? 'да' : 'нет',
      },
    }

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('bad response')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setError('Не удалось отправить. Попробуйте ещё раз или напишите нам в Telegram.')
    }
  }

  if (status === 'success') {
    return (
      <div className={cn('flex flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center', className)}>
        <CheckCircle2 className="size-12 text-primary" />
        <h3 className="mt-4 font-display text-xl font-bold">Отклик отправлен</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Спасибо! Рекрутер свяжется с вами в ближайшее время, чтобы обсудить условия и график.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 text-sm font-semibold text-primary hover:underline"
        >
          Отправить ещё один отклик
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className={cn('space-y-4', className)} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium">
            Имя
          </label>
          <input id="cf-name" name="name" autoComplete="name" placeholder="Ваше имя" className={inputCls} />
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium">
            Телефон
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+375 (__) ___-__-__" className={inputCls} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-city" className="mb-1.5 block text-sm font-medium">
            Город
          </label>
          <input id="cf-city" name="city" placeholder="Минск" className={inputCls} />
        </div>
        <div>
          <label htmlFor="cf-age" className="mb-1.5 block text-sm font-medium">
            Возраст
          </label>
          <input id="cf-age" name="age" inputMode="numeric" placeholder="Например, 32" className={inputCls} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-position" className="mb-1.5 block text-sm font-medium">
            Желаемая вакансия
          </label>
          <select id="cf-position" name="position" defaultValue={VACANCIES[0].title} className={cn(inputCls, 'appearance-none')}>
            {VACANCIES.map((v) => (
              <option key={v.title} value={v.title}>
                {v.title}
              </option>
            ))}
            <option value="Другое">Другое</option>
          </select>
        </div>
        <div>
          <label htmlFor="cf-experience" className="mb-1.5 block text-sm font-medium">
            Стаж вождения
          </label>
          <select id="cf-experience" name="experience" defaultValue="1–3 года" className={cn(inputCls, 'appearance-none')}>
            <option>Без опыта</option>
            <option>До 1 года</option>
            <option>1–3 года</option>
            <option>3–5 лет</option>
            <option>Более 5 лет</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-license" className="mb-1.5 block text-sm font-medium">
          Открытые категории прав
        </label>
        <input id="cf-license" name="license" placeholder="Например, B, C, CE" className={inputCls} />
      </div>

      <label className="flex items-center gap-2.5 text-sm">
        <input type="checkbox" name="ownCar" className="size-4 rounded border-input accent-primary" />
        <span className="text-foreground/85">Есть свой автомобиль для работы</span>
      </label>

      <div>
        <label htmlFor="cf-comment" className="mb-1.5 block text-sm font-medium">
          Комментарий
        </label>
        <textarea
          id="cf-comment"
          name="comment"
          rows={3}
          placeholder="Коротко о себе и удобное время для звонка"
          className={cn(inputCls, 'resize-none')}
        />
      </div>

      {status === 'error' && <p className="text-sm text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg grad-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5 disabled:opacity-70"
      >
        {status === 'loading' && <Loader2 className="size-4 animate-spin" />}
        Откликнуться
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
      </p>
    </form>
  )
}
