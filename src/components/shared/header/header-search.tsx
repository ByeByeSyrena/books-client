import { Search } from 'lucide-react'
import { useState } from 'react'

export function HeaderSearch() {
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <div className="relative min-w-[260px] flex-1">
      <Search
        size={15}
        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-content-muted"
      />
      <input
        className={[
          'h-10 w-full rounded-lg border bg-white/45 py-0 pr-4 pl-9 text-[14px] text-content-primary outline-none placeholder:text-content-muted transition',
          searchFocused
            ? 'border-[#534ab7] bg-white/80 shadow-[0_0_0_3px_rgba(157,124,255,.14)]'
            : 'border-purple-glow/25 hover:border-purple-glow/45',
        ].join(' ')}
        placeholder="Search by title, author or ISBN..."
        type="text"
        onBlur={() => setSearchFocused(false)}
        onFocus={() => setSearchFocused(true)}
      />
    </div>
  )
}
