import { createContext, useContext, type ReactNode } from 'react'
import type { ModalSize } from './modal.config'

export type ModalOptions = {
  title: ReactNode
  description?: ReactNode
  content: ReactNode
  footer?: ReactNode
  size?: ModalSize
  showCloseButton?: boolean
  overlayImage?: string
}

export type ModalContextValue = {
  isOpen: boolean
  openModal: (options: ModalOptions) => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextValue | null>(null)

export function useModal() {
  const modal = useContext(ModalContext)

  if (!modal) {
    throw new Error('useModal must be used inside <ModalProvider>.')
  }

  return modal
}
