export type AuthMode = 'sign-in' | 'sign-up'

export type AuthField = {
  id: string
  label: string
  type: 'email' | 'password' | 'text'
  placeholder: string
  autoComplete: string
}

export const AUTH_MODAL_COPY: Record<
  AuthMode,
  {
    title: string
    description: string
    submitLabel: string
    switchPrompt: string
    switchLabel: string
  }
> = {
  'sign-in': {
    title: 'Welcome back',
    description: 'Sign in to manage your listings, swaps, wishlist, and messages.',
    submitLabel: 'Sign in',
    switchPrompt: 'New to BookSwap?',
    switchLabel: 'Create account',
  },
  'sign-up': {
    title: 'Create your account',
    description: 'Join BookSwap to list books, save favorites, and arrange swaps.',
    submitLabel: 'Sign up',
    switchPrompt: 'Already have an account?',
    switchLabel: 'Sign in',
  },
}

export const SIGN_IN_FIELDS: AuthField[] = [
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'olena@email.com',
    autoComplete: 'email',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    autoComplete: 'current-password',
  },
]

export const SIGN_UP_FIELDS: AuthField[] = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Olena K.',
    autoComplete: 'name',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'olena@email.com',
    autoComplete: 'email',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Create a password',
    autoComplete: 'new-password',
  },
  {
    id: 'confirmPassword',
    label: 'Confirm password',
    type: 'password',
    placeholder: 'Repeat your password',
    autoComplete: 'new-password',
  },
]
