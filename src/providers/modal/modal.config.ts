export type ModalSize = 'sm' | 'md' | 'lg' | 'xl'

export const MODAL_SIZE_CLASSES: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-[min(1280px,calc(100vw-48px))]',
}
