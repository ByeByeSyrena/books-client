import { Button } from '@/components/ui/button'
import { HeaderBadge } from './header-badge'

export function IconBtn({
  children,
  badge,
  title,
  onClick,
}: {
  children: React.ReactNode
  badge?: number
  title: string
  onClick?: () => void
}) {
  return (
    <Button variant="cosmicOutline" size="icon-sm" title={title} onClick={onClick} className="relative">
      {children}
      {badge != null && badge > 0 && (
        <HeaderBadge value={badge} className="absolute -top-1.5 -right-1.5" />
      )}
    </Button>
  )
}
