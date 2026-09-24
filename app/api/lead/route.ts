import { NextResponse } from 'next/server'

type LeadPayload = {
  type?: string
  name?: string
  phone?: string
  isCompany?: boolean
  company?: string
  taxId?: string
  comment?: string
  meta?: Record<string, string | number>
}

function digits(s: string) {
  return s.replace(/\D/g, '')
}

export async function POST(req: Request) {
  let body: LeadPayload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  const name = (body.name ?? '').trim()
  const phone = (body.phone ?? '').trim()

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: 'name_required' }, { status: 422 })
  }
  if (digits(phone).length < 9) {
    return NextResponse.json({ ok: false, error: 'phone_invalid' }, { status: 422 })
  }
  if (body.isCompany && digits(body.taxId ?? '').length < 9) {
    return NextResponse.json({ ok: false, error: 'taxid_invalid' }, { status: 422 })
  }

  const lines: string[] = [
    `🚚 Новая заявка (${body.type ?? 'contact'})`,
    `Имя: ${name}`,
    `Телефон: ${phone}`,
  ]
  if (body.isCompany) {
    lines.push(`Тип: компания`)
    if (body.company) lines.push(`Компания: ${body.company.trim()}`)
    if (body.taxId) lines.push(`УНП/ИНН: ${body.taxId.trim()}`)
  } else {
    lines.push(`Тип: физлицо`)
  }
  if (body.comment) lines.push(`Комментарий: ${body.comment.trim()}`)
  if (body.meta) {
    lines.push('—')
    for (const [k, v] of Object.entries(body.meta)) lines.push(`${k}: ${v}`)
  }
  const text = lines.join('\n')

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (token && chatId) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
      })
      if (!res.ok) {
        console.error('[v0] Telegram send failed:', await res.text())
      }
    } catch (err) {
      console.error('[v0] Telegram error:', err)
    }
  } else {
    console.log('[v0] Lead received (no Telegram configured):\n' + text)
  }

  return NextResponse.json({ ok: true })
}
