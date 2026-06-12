import { ArrowLeftRight, BookOpen, CircleDollarSign, Heart } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type FilterIntent = {
  label: string
  value: string
  Icon: LucideIcon
  isSelected?: boolean
  className: string
}

export type FilterOption = {
  id: string
  label: string
  count?: number
  defaultChecked?: boolean
}

export type FilterGroup = {
  title: string
  actionLabel?: string
  options: FilterOption[]
}

export type SearchOption = {
  id: string
  label: string
  count?: number
}

export const FILTER_INTENTS: FilterIntent[] = [
  {
    label: 'All',
    value: 'all',
    Icon: BookOpen,
    className: 'border-purple-glow/50 bg-[#eeedfe] text-[#3c3489]',
  },
  {
    label: 'For sale',
    value: 'sale',
    Icon: CircleDollarSign,
    className: 'border-[#f0997b]/70 bg-[#faece7] text-[#712b13]',
  },
  {
    label: 'For swap',
    value: 'swap',
    Icon: ArrowLeftRight,
    isSelected: true,
    className: 'border-sky/70 bg-[#e6f1fb] text-[#0c447c]',
  },
  {
    label: 'Free',
    value: 'free',
    Icon: Heart,
    className: 'border-teal-mint/70 bg-[#eaf3de] text-[#27500a]',
  },
]

export const FILTER_GROUPS: FilterGroup[] = [
  {
    title: 'Condition',
    options: [
      {
        id: 'condition-like-new',
        label: 'Like new',
        count: 18,
      },
      {
        id: 'condition-good',
        label: 'Good',
        count: 21,
        defaultChecked: true,
      },
      {
        id: 'condition-acceptable',
        label: 'Acceptable',
        count: 8,
      },
    ],
  },
  {
    title: 'Delivery',
    options: [
      {
        id: 'delivery-nova-poshta',
        label: 'Nova Poshta',
        defaultChecked: true,
      },
      {
        id: 'delivery-meet',
        label: 'Meet in person',
      },
    ],
  },
]

export const GENRE_OPTIONS: SearchOption[] = [
  {
    id: 'genre-fantasy',
    label: 'Fantasy',
    count: 143,
  },
  {
    id: 'genre-scifi',
    label: 'Sci-fi',
    count: 89,
  },
  {
    id: 'genre-fiction',
    label: 'Fiction',
    count: 312,
  },
  {
    id: 'genre-young-adult',
    label: 'Young adult',
    count: 67,
  },
]

export const LOCATION_OPTIONS: SearchOption[] = [
  {
    id: 'location-kyiv',
    label: 'Kyiv',
    count: 47,
  },
  {
    id: 'location-lviv',
    label: 'Lviv',
    count: 16,
  },
  {
    id: 'location-odesa',
    label: 'Odesa',
    count: 12,
  },
  {
    id: 'location-kharkiv',
    label: 'Kharkiv',
    count: 9,
  },
]
