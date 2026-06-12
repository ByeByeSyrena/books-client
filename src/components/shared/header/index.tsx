import { HeaderActions } from './header-actions'
import { HeaderLogo } from './header-logo'
import { HeaderNav } from './header-nav'
import { HeaderSearch } from './header-search'

export function Header() {
  return (
    <header className="app-glass-surface z-10 rounded-b-xl px-6 shadow-[0_8px_10px_var(--glow-fade-purple)]">
      <div className="flex h-14 items-center gap-4">
        <HeaderLogo />
        <HeaderNav />
        <HeaderSearch />
        <HeaderActions />
      </div>
    </header>
  )
}
