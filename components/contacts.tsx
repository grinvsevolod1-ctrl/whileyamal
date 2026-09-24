import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { LeadForm } from '@/components/lead-form'
import { TelegramIcon, ViberIcon } from '@/components/social-icons'
import { SITE, SOCIALS } from '@/lib/site'

export function Contacts() {
  return (
    <section id="contacts" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Контакты</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                Оставьте заявку на перевозку
              </h2>
              <p className="mt-4 text-muted-foreground text-balance">
                Расскажите, что и куда нужно везти — рассчитаем стоимость и подберём транспорт.
                Отвечаем в течение 15 минут в рабочее время и круглосуточно принимаем заявки.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Mail className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">Почта</p>
                    <a href={`mailto:${SITE.email}`} className="font-semibold hover:text-primary">
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">Офис и склад</p>
                    <p className="font-semibold">{SITE.city}, Республика Беларусь</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Clock className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">Режим работы</p>
                    <p className="font-semibold">{SITE.hours}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <MessageCircle className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">Мессенджеры</p>
                    <div className="mt-1 flex gap-2">
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
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
              <LeadForm type="contact" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
