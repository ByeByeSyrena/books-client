import {
  createContext,
  type ComponentPropsWithoutRef,
  type ReactNode,
  useContext,
  useId,
  useState,
} from 'react'

type TooltipProviderValue = {
  delayDuration: number
}

const TooltipProviderContext = createContext<TooltipProviderValue>({
  delayDuration: 300,
})

export function TooltipProvider({
  children,
  delayDuration = 300,
}: {
  children: ReactNode
  delayDuration?: number
}) {
  return (
    <TooltipProviderContext value={{ delayDuration }}>
      {children}
    </TooltipProviderContext>
  )
}

type TooltipContextValue = {
  contentId: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const TooltipContext = createContext<TooltipContextValue | null>(null)

function useTooltip() {
  const tooltip = useContext(TooltipContext)

  if (!tooltip) {
    throw new Error('Tooltip components must be used inside <Tooltip>.')
  }

  return tooltip
}

export function Tooltip({ children }: { children: ReactNode }) {
  const contentId = useId()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <TooltipContext value={{ contentId, isOpen, setIsOpen }}>
      <span className="relative inline-flex">{children}</span>
    </TooltipContext>
  )
}

export function TooltipTrigger({
  children,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  ...props
}: ComponentPropsWithoutRef<'button'>) {
  const { delayDuration } = useContext(TooltipProviderContext)
  const { contentId, isOpen, setIsOpen } = useTooltip()
  const [timeoutId, setTimeoutId] = useState<number | null>(null)

  function clearOpenTimeout() {
    if (timeoutId) {
      window.clearTimeout(timeoutId)
      setTimeoutId(null)
    }
  }

  return (
    <button
      type="button"
      aria-describedby={isOpen ? contentId : undefined}
      onBlur={(event) => {
        clearOpenTimeout()
        setIsOpen(false)
        onBlur?.(event)
      }}
      onFocus={(event) => {
        setIsOpen(true)
        onFocus?.(event)
      }}
      onMouseEnter={(event) => {
        clearOpenTimeout()
        const nextTimeoutId = window.setTimeout(
          () => setIsOpen(true),
          delayDuration,
        )
        setTimeoutId(nextTimeoutId)
        onMouseEnter?.(event)
      }}
      onMouseLeave={(event) => {
        clearOpenTimeout()
        setIsOpen(false)
        onMouseLeave?.(event)
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export function TooltipContent({
  children,
  className = '',
  ...props
}: ComponentPropsWithoutRef<'span'>) {
  const { contentId, isOpen } = useTooltip()

  if (!isOpen) {
    return null
  }

  return (
    <span
      id={contentId}
      role="tooltip"
      className={`absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-[var(--text-h)] px-2 py-1 text-xs font-medium text-[var(--bg)] shadow-sm ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
