'use client'

import { useState, type FormEvent } from 'react'
import { Loader2, CheckCircle2, User, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function LeadForm({
  type = 'contact',
  meta,
  submitLabel = 'Отправить заявку',
  className,
}: {
  type?: string
  meta?: Record<string, string | number>
  submitLabel?: string
  className?: string
}) {
  const [isCompany, setIsCompany] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      type,
      name: String(fd.get('name') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      isCompany,
      company: String(fd.get('company') || '').trim(),
      taxId: String(fd.get('taxId') || '').trim(),
      comment: String(fd.get('comment') || '').trim(),
      meta,
    }

    if (payload.name.length < 2) {
      setStatus('error')
      setError('Укажите имя')
      return
    }
    if (payload.phone.replace(/\D/g, '').length < 9) {
      setStatus('error')
      setError('Укажите корректный телефон')
      return
    }
    if (isCompany && payload.taxId.replace(/\D/g, '').length < 9) {
      setStatus('error')
      setError('УНП/ИНН должен содержать не менее 9 цифр')
      return
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
      setIsCompany(false)
    } catch {
      setStatus('error')
      setError('Не удалось отправить. Попробуйте ещё раз или напишите нам в Telegram.')
    }
  }

  if (status === 'success') {
    return (
      <div className={cn('flex flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center', className)}>
        <CheckCircle2 className="size-12 text-primary" />
        <h3 className="mt-4 font-display text-xl font-bold">Заявка принята</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Менеджер свяжется с вами в ближайшее время, чтобы уточнить детали перевозки.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 text-sm font-semibold text-primary hover:underline"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    )
  }

  const inputCls =
    'w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30'

  return (
    <form onSubmit={onSubmit} className={cn('space-y-4', className)} noValidate>
      <div className="inline-flex rounded-lg border border-border bg-background/40 p-1">
        <button
          type="button"
          onClick={() => setIsCompany(false)}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-md px-4 py-1.5 text-sm font-medium transition-colors',
            !isCompany ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
          )}
        >
          <User className="size-4" /> Физлицо
        </button>
        <button
          type="button"
          onClick={() => setIsCompany(true)}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-md px-4 py-1.5 text-sm font-medium transition-colors',
            isCompany ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
          )}
        >
          <Building2 className="size-4" /> Компания
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-name" className="mb-1.5 block text-sm font-medium">
            Имя
          </label>
          <input id="lf-name" name="name" autoComplete="name" placeholder="Как к вам обращаться" className={inputCls} />
        </div>
        <div>
          <label htmlFor="lf-phone" className="mb-1.5 block text-sm font-medium">
            Телефон
          </label>
          <input id="lf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+375 (__) ___-__-__" className={inputCls} />
        </div>
      </div>

      {isCompany && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="lf-company" className="mb-1.5 block text-sm font-medium">
              Название компании
            </label>
            <input id="lf-company" name="company" placeholder="ООО «Компания»" className={inputCls} />
          </div>
          <div>
            <label htmlFor="lf-tax" className="mb-1.5 block text-sm font-medium">
              УНП / ИНН
            </label>
            <input id="lf-tax" name="taxId" inputMode="numeric" placeholder="9 и более цифр" className={inputCls} />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="lf-comment" className="mb-1.5 block text-sm font-medium">
          Комментарий
        </label>
        <textarea
          id="lf-comment"
          name="comment"
          rows={3}
          placeholder="Что везём, откуда и куда, желаемые сроки"
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
        {submitLabel}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
      </p>
    </form>
  )
}
