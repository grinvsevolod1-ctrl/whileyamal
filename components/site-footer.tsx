import Link from 'next/link'
import { Mail, MapPin, Clock } from 'lucide-react'
import { Logo } from '@/components/logo'
import { TelegramIcon, ViberIcon } from '@/components/social-icons'
import { SITE, SOCIALS, SERVICES } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Полный цикл грузоперевозок и складской логистики по Беларуси, России и странам ЕАЭС.
              Договор, страховка, отслеживание груза 24/7.
            </p>
            <div className="flex gap-2">
              <a
                href={SOCIALS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <TelegramIcon className="size-4" />
              </a>
              <a
                href={SOCIALS.viber}
                aria-label="Viber"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <ViberIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Услуги</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/uslugi#${s.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Компания</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/#directions" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Тарифы и направления
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Как мы работаем
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Вопросы и ответы
                </Link>
              </li>
              <li>
                <Link href="/uslugi" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Каталог услуг
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Контакты</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-foreground">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0 text-primary" />
                <span>{SITE.city}, Республика Беларусь</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Clock className="size-4 shrink-0 text-primary" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {SITE.legal}.
          </p>
          <p>Работаем по договору · Страхование груза · ЭДО</p>
        </div>
      </div>
    </footer>
  )
}
