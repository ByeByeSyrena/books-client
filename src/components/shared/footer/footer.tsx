import starSeparator from '../../../assets/star.svg'
import {
  FOOTER_BOTTOM_LINK,
  FOOTER_LINK_GROUPS,
  FOOTER_TAGLINE,
  type FooterLinkGroup,
} from './footer.config'

function StarDivider() {
  return (
    <div className="hidden md:flex shrink-0 flex-col items-center self-stretch py-2">
      <div className="w-px flex-1 bg-[linear-gradient(to_bottom,transparent,var(--grape))]" />
      <img src={starSeparator} alt="" className="my-1.5 h-5 w-auto shrink-0" />
      <div className="w-px flex-1 bg-[linear-gradient(to_bottom,var(--grape),transparent)]" />
    </div>
  )
}

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857-8.161-10.643h7.052l4.261 5.633 5.611-6.433zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

function SocialLinks() {
  return (
    <div className="mt-3 flex justify-center gap-2">
      {SOCIAL_LINKS.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="grape-border-hover relative flex size-8 items-center justify-center rounded-full bg-white/30 text-[#7861ff] no-underline transition-all hover:scale-110 hover:text-[#c084fc]"
          style={{
            background: 'linear-gradient(white, white) padding-box, linear-gradient(108deg, var(--grape), var(--grape-end)) border-box',
            border: '1px solid transparent',
          }}
        >
          {icon}
        </a>
      ))}
    </div>
  )
}

function FooterLinkGroups({ groups }: { groups: FooterLinkGroup[] }) {
  return (
    <nav
      aria-label="Footer navigation"
      className="grid w-fit grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-[150px_150px_150px_150px] lg:gap-x-16"
    >
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-2">
          <h2 className="mb-2 flex flex-col gap-1.5">
            <span className="flex items-center gap-1.5 bg-[linear-gradient(108deg,var(--grape),var(--grape-end))] bg-clip-text text-[11px] font-medium uppercase tracking-[0.07em] text-transparent">
              <group.icon size={13} className="shrink-0 text-[var(--grape)]" />
              {group.title}
            </span>
            <span className="h-px w-8 rounded-full bg-[linear-gradient(90deg,var(--grape),var(--grape-end))]" />
          </h2>
          {group.links.map((link) => (
            <a
              key={link.label}
              className="inline-block text-[13px] text-content-secondary no-underline transition-all hover:scale-105 hover:text-[#534ab7]"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      ))}
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="app-glass-surface mt-0 rounded-t-xl text-content-secondary shadow-[0_-8px_24px_var(--glow-fade-purple)]">
      <div className="flex flex-col gap-6 px-6 py-6 md:flex-row md:items-start md:justify-start md:px-8">
        <div className="w-full shrink-0 md:w-[200px]">
          <a href="/" className="mb-3 flex justify-center no-underline">
            <img
              src="/src/assets/bookswap-logo-icon.svg"
              alt="BookSwap"
              width={88}
              height={122}
            />
          </a>
          <p className="text-center max-w-[220px] font-[var(--font-cormorant)] text-[12px] italic leading-4 text-content-muted">
            {FOOTER_TAGLINE}
          </p>
          <SocialLinks />
        </div>

        <StarDivider />
        <FooterLinkGroups groups={FOOTER_LINK_GROUPS} />
      </div>

      <div className="flex flex-col gap-2 border-t border-white/60 px-6 py-3.5 text-[12px] text-content-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
        <a
          className="text-content-secondary no-underline transition-colors hover:text-content-primary"
          href={FOOTER_BOTTOM_LINK.href}
        >
          {FOOTER_BOTTOM_LINK.label}
        </a>
        <span>&copy; 2026 BookSwap. All rights reserved.</span>
      </div>
    </footer>
  )
}
