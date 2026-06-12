import { BookOpen, CircleUserRound, Headphones, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type FooterLink = {
  label: string
  href: string
}

export type FooterLinkGroup = {
  title: string
  icon: LucideIcon
  links: FooterLink[]
}

export const FOOTER_TAGLINE =
  'A cozy space where books find new readers. Buy, swap, share, connect.'

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Discover',
    icon: BookOpen,
    links: [
      {
        label: 'Market',
        href: '#',
      },
    ],
  },
  {
    title: 'Account',
    icon: CircleUserRound,
    links: [
      {
        label: 'My profile',
        href: '#',
      },
      {
        label: 'My listings',
        href: '#',
      },
      {
        label: 'Swaps',
        href: '#',
      },
      {
        label: 'Wishlist',
        href: '#',
      },
    ],
  },
  {
    title: 'Support',
    icon: Headphones,
    links: [
      {
        label: 'How it works',
        href: '#',
      },
      {
        label: 'FAQ',
        href: '#',
      },
      {
        label: 'Contact us',
        href: '#',
      },
    ],
  },
  {
    title: 'Legal',
    icon: ShieldCheck,
    links: [
      {
        label: 'Terms of service',
        href: '#',
      },
      {
        label: 'Privacy policy',
        href: '#',
      },
      {
        label: 'Cookie settings',
        href: '#',
      },
    ],
  },
]

export const FOOTER_BOTTOM_LINK = {
  label: 'Public offer',
  href: '#',
}
