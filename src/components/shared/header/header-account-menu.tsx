import { Fragment, useState } from 'react'
import { LogIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuthModal } from '@/features/auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  ACCOUNT_INITIALS,
  ACCOUNT_MENU_SECTIONS,
  ACCOUNT_PROFILE,
  type HeaderMenuItem,
} from './header-actions.config'
import { HeaderBadge } from './header-badge'

function AccountMenuItem({ item }: { item: HeaderMenuItem }) {
  const { Icon, badge, label, variant } = item

  return (
    <DropdownMenuItem variant={variant}>
      <Icon size={14} />
      {label}
      {badge != null && badge > 0 && (
        <HeaderBadge value={badge} className="ml-auto" />
      )}
    </DropdownMenuItem>
  )
}

function AccountSummary() {
  return (
    <div className="flex items-center gap-2.5 px-3 py-2.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#afa9ec]/60 bg-[#eeedfe] text-[13px] font-semibold text-[#3c3489]">
        {ACCOUNT_INITIALS}
      </div>
      <div>
        <div className="text-[13px] font-medium text-[#1a1917]">
          {ACCOUNT_PROFILE.name}
        </div>
        <div className="text-[11px] text-[#9e9b93]">
          {ACCOUNT_PROFILE.email}
        </div>
      </div>
    </div>
  )
}

export function HeaderAccountMenu() {
  const { openAuthModal } = useAuthModal()
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)

  function handleOpenAuthModal() {
    setIsAccountMenuOpen(false)
    window.setTimeout(() => openAuthModal('sign-in'), 0)
  }

  return (
    <DropdownMenu open={isAccountMenuOpen} onOpenChange={setIsAccountMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          title="My account"
          variant="cosmicOutline"
          size="icon"
          className="rounded-full text-[13px] font-semibold"
        >
          {ACCOUNT_INITIALS}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52 rounded-xl">
        <AccountSummary />
        {ACCOUNT_MENU_SECTIONS.map((section) => (
          <Fragment key={section.items.map((item) => item.label).join('-')}>
            <DropdownMenuSeparator />
            {section.items.map((item) => (
              <AccountMenuItem key={item.label} item={item} />
            ))}
          </Fragment>
        ))}
        <DropdownMenuSeparator />
        <div className="px-2 py-2">
          <Button
            variant="cosmicOutline"
            size="sm"
            className="w-full gap-1.5"
            onClick={handleOpenAuthModal}
          >
            <LogIn size={13} />
            Sign in / Sign up
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
