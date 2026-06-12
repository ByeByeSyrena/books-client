import { cn } from '@/lib/utils'

type HeaderBadgeProps = {
  value: number
  className?: string
}

export function HeaderBadge({ value, className }: HeaderBadgeProps) {
  return (
    <span
      className={cn(
        'flex h-4 min-w-4 items-center justify-center rounded-full bg-[#f14fa3] px-1 text-[9px] font-bold text-white',
        className,
      )}
    >
      {value}
    </span>
  )
}
