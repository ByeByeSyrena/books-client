import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MODAL_SIZE_CLASSES } from './modal.config'
import { ModalContext, type ModalOptions } from './modal-context'
import starSvg from '@/assets/star.svg'

function HorizontalStarDivider() {
  return (
    <div className="flex items-center px-6">
      <div className="h-px flex-1 bg-[linear-gradient(to_right,transparent,var(--grape))]" />
      <img src={starSvg} alt="" className="mx-2 h-4 w-auto shrink-0" />
      <div className="h-px flex-1 bg-[linear-gradient(to_right,var(--grape),transparent)]" />
    </div>
  )
}

function ModalShell({
  modal,
  onClose,
}: {
  modal: ModalOptions
  onClose: () => void
}) {
  const size = modal.size ?? 'md'
  const showCloseButton = modal.showCloseButton ?? true

  return (
    <Dialog.Portal>
      <Dialog.Overlay
        className="fixed inset-0 z-50 transition-opacity duration-200 data-[state=closed]:opacity-0 data-[state=open]:opacity-100"
        style={modal.overlayImage ? {
          backgroundImage: `url(${modal.overlayImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backdropFilter: 'blur(2px)',
        } : {
          background: `
            radial-gradient(circle at 15% 20%, rgba(255, 182, 217, 0.45), transparent 30%),
            radial-gradient(circle at 85% 15%, rgba(167, 139, 250, 0.4), transparent 35%),
            radial-gradient(circle at 70% 80%, rgba(112, 216, 255, 0.3), transparent 32%),
            linear-gradient(135deg, rgba(248,243,255,0.82) 0%, rgba(238,244,255,0.82) 35%, rgba(246,239,255,0.82) 65%, rgba(240,248,255,0.82) 100%)
          `,
          backdropFilter: 'blur(12px)',
        }}
      />
      <Dialog.Content
        {...(!modal.description ? { 'aria-describedby': undefined } : {})}
        className={cn(
          'app-glass-surface fixed top-1/2 left-1/2 z-50 flex max-h-[min(720px,calc(100svh-32px))] w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl text-content-primary shadow-[0_8px_32px_var(--grape)] outline-none transition duration-200 ease-out data-[state=closed]:scale-95 data-[state=closed]:opacity-0 data-[state=open]:scale-100 data-[state=open]:opacity-100',
          MODAL_SIZE_CLASSES[size],
        )}
      >
        <div className="flex items-start justify-between gap-6 px-6 py-5">
          <div className="min-w-0">
            <Dialog.Title className="text-[15px] font-semibold text-content-primary">
              {modal.title}
            </Dialog.Title>
            {modal.description && (
              <Dialog.Description className="mt-1 text-[13px] leading-5 text-content-muted">
                {modal.description}
              </Dialog.Description>
            )}
          </div>

          {showCloseButton && (
            <Dialog.Close asChild>
              <Button
                aria-label="Close modal"
                className="-mt-1 shrink-0"
                size="icon-sm"
                type="button"
                variant="cosmicOutline"
                onClick={onClose}
              >
                <XIcon size={15} />
              </Button>
            </Dialog.Close>
          )}
        </div>

        <HorizontalStarDivider />

        <div className="overflow-y-auto px-6 py-3 text-[14px] leading-6 text-content-secondary">
          {modal.content}
        </div>

        {modal.footer && (
          <div className="flex items-center justify-between gap-2 border-t border-white/60 px-6 py-4">
            {modal.footer}
          </div>
        )}
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalOptions | null>(null)

  useEffect(() => {
    if (modal !== null) {
      return
    }

    const cleanupPointerLock = window.setTimeout(() => {
      if (document.body.style.pointerEvents === 'none') {
        document.body.style.pointerEvents = ''
      }
    }, 0)

    return () => window.clearTimeout(cleanupPointerLock)
  }, [modal])

  const closeModal = useCallback(() => {
    setModal(null)
  }, [])

  const openModal = useCallback((options: ModalOptions) => {
    setModal(options)
  }, [])

  const contextValue = useMemo(
    () => ({
      isOpen: modal !== null,
      openModal,
      closeModal,
    }),
    [closeModal, modal, openModal],
  )

  return (
    <ModalContext value={contextValue}>
      {children}
      <Dialog.Root
        open={modal !== null}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            closeModal()
          }
        }}
      >
        {modal && <ModalShell modal={modal} onClose={closeModal} />}
      </Dialog.Root>
    </ModalContext>
  )
}
