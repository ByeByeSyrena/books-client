import { useMemo, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  AUTH_MODAL_COPY,
  SIGN_IN_FIELDS,
  SIGN_UP_FIELDS,
  type AuthField,
  type AuthMode,
} from '../auth-modal.config'
import { cn } from '@/lib/utils'

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <path
        fill="#4285F4"
        d="M21.6 12.227c0-.709-.064-1.391-.182-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.995 3.018v2.509h3.232c1.891-1.741 2.981-4.304 2.981-7.35z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.964-.895 6.619-2.423l-3.232-2.509c-.895.6-2.041.955-3.387.955-2.605 0-4.81-1.759-5.596-4.123H3.064v2.591A9.997 9.997 0 0 0 12 22z"
      />
      <path
        fill="#FBBC05"
        d="M6.404 13.9A6.01 6.01 0 0 1 6.091 12c0-.659.114-1.3.313-1.9V7.509h-3.34A9.997 9.997 0 0 0 2 12c0 1.614.386 3.141 1.064 4.491L6.404 13.9z"
      />
      <path
        fill="#EA4335"
        d="M12 5.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C16.959 2.991 14.695 2 12 2a9.997 9.997 0 0 0-8.936 5.509l3.34 2.591C7.19 7.736 9.395 5.977 12 5.977z"
      />
    </svg>
  )
}

function AuthFieldControl({ field }: { field: AuthField }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const isPasswordField = field.type === 'password'
  const inputType = isPasswordField && isPasswordVisible ? 'text' : field.type
  const PasswordIcon = isPasswordVisible ? EyeOff : Eye

  return (
    <label className="flex flex-col gap-1 text-[13px] font-medium text-content-primary">
      {field.label}
      <span className="relative">
        <input
          autoComplete={field.autoComplete}
          className={cn(
            'h-10 w-full rounded-md border border-purple-glow/30 bg-white/55 px-3 text-[14px] font-normal text-content-primary outline-none transition focus:border-purple-glow focus:bg-white/80 focus:ring-3 focus:ring-purple-glow/15',
            isPasswordField && 'pr-10',
          )}
          id={field.id}
          name={field.id}
          placeholder={field.placeholder}
          type={inputType}
        />
        {isPasswordField && (
          <button
            aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
            className="absolute top-1/2 right-3 flex -translate-y-1/2 text-content-muted transition-colors hover:text-[#534ab7]"
            type="button"
            onClick={() => setIsPasswordVisible((currentValue) => !currentValue)}
          >
            <PasswordIcon size={16} />
          </button>
        )}
      </span>
    </label>
  )
}

export function AuthModalContent({ initialMode = 'sign-in' }: { initialMode?: AuthMode }) {
  const [authMode, setAuthMode] = useState<AuthMode>(initialMode)
  const modalCopy = AUTH_MODAL_COPY[authMode]
  const fields = useMemo(
    () => (authMode === 'sign-in' ? SIGN_IN_FIELDS : SIGN_UP_FIELDS),
    [authMode],
  )
  const nextMode: AuthMode = authMode === 'sign-in' ? 'sign-up' : 'sign-in'

  return (
    <div className="space-y-3">
      <Button
        variant="cosmicOutline"
        size="default"
        className="w-full bg-white/55"
        type="button"
      >
        <GoogleIcon />
        Continue with Google
      </Button>

      <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.07em] text-content-muted">
        <span className="h-px flex-1 bg-white/70" />
        or
        <span className="h-px flex-1 bg-white/70" />
      </div>

      <form
        className="space-y-3.5"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        {fields.map((field) => (
          <AuthFieldControl key={field.id} field={field} />
        ))}

        {authMode === 'sign-in' && (
          <div className="flex justify-end">
            <button
              className="text-[13px] font-medium text-[#534ab7] transition-colors hover:text-[#7861ff]"
              type="button"
            >
              Forgot password?
            </button>
          </div>
        )}

        <Button variant="grape" size="default" className="w-full" type="submit">
          {modalCopy.submitLabel}
        </Button>
      </form>

      <div className="text-center text-[13px] text-content-muted">
        {modalCopy.switchPrompt}{' '}
        <button
          className="font-semibold text-[#534ab7] transition-colors hover:text-[#7861ff]"
          type="button"
          onClick={() => setAuthMode(nextMode)}
        >
          {modalCopy.switchLabel}
        </button>
      </div>
    </div>
  )
}
