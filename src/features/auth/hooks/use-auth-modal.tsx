import { AuthModalContent } from '../components/auth-modal-content'
import type { AuthMode } from '../auth-modal.config'
import { useModal } from '@/providers'

export function useAuthModal() {
  const { openModal } = useModal()

  function openAuthModal(initialMode: AuthMode = 'sign-in') {
    openModal({
      title: initialMode === 'sign-in' ? 'Sign in' : 'Sign up',
      description: 'Access your BookSwap account.',
      content: <AuthModalContent initialMode={initialMode} />,
      size: 'sm',
    })
  }

  return { openAuthModal }
}
