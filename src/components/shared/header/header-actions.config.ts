import {
  ArrowLeftRight,
  Bell,
  Heart,
  LogOut,
  MessageSquare,
  Plus,
  Settings,
  ShoppingCart,
  User,
  type LucideIcon,
} from 'lucide-react'

export type HeaderAction = {
  title: string
  Icon: LucideIcon
  badge?: number
}

export type HeaderMenuItem = {
  label: string
  Icon: LucideIcon
  badge?: number
  variant?: 'default' | 'destructive'
}

type HeaderMenuSection = {
  items: HeaderMenuItem[]
}

export const ACCOUNT_INITIALS = 'OK'

export const ACCOUNT_PROFILE = {
  name: 'Olena K.',
  email: 'olena@email.com',
}

export const ADD_BOOK_ACTION = {
  label: 'Add book',
  Icon: Plus,
}

export const HEADER_ACTIONS: HeaderAction[] = [
  {
    title: 'Notifications',
    Icon: Bell,
    badge: 3,
  },
  {
    title: 'Wishlist',
    Icon: Heart,
  },
  {
    title: 'Cart',
    Icon: ShoppingCart,
    badge: 2,
  },
]

export const ACCOUNT_MENU_SECTIONS: HeaderMenuSection[] = [
  {
    items: [
      {
        label: 'My profile',
        Icon: User,
      },
      {
        label: 'Cart',
        Icon: ShoppingCart,
        badge: 2,
      },
      {
        label: 'Wishlist',
        Icon: Heart,
      },
    ],
  },
  {
    items: [
      {
        label: 'Swaps',
        Icon: ArrowLeftRight,
        badge: 2,
      },
      {
        label: 'Messages',
        Icon: MessageSquare,
        badge: 5,
      },
      {
        label: 'Notifications',
        Icon: Bell,
        badge: 3,
      },
    ],
  },
  {
    items: [
      {
        label: ADD_BOOK_ACTION.label,
        Icon: ADD_BOOK_ACTION.Icon,
      },
    ],
  },
  {
    items: [
      {
        label: 'Settings',
        Icon: Settings,
      },
      {
        label: 'Sign out',
        Icon: LogOut,
        variant: 'destructive',
      },
    ],
  },
]
