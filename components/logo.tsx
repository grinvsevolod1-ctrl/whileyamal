import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex flex-col leading-none', className)}
      aria-label="TRANSLINE — на главную"
    >
      <span className="font-display text-lg font-extrabold tracking-tight">
        <span className="text-foreground">TRANS</span>
        <span className="bg-gradient-to-r from-primary to-amber-300 bg-clip-text text-transparent">
          LINE
        </span>
        <span className="ml-0.5 inline-block h-1.5 w-1.5 translate-y-[-0.55em] rotate-45 rounded-[2px] bg-accent" />
      </span>
      <span className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-foreground/80">
        Логистический центр
      </span>
    </Link>
  )
}
