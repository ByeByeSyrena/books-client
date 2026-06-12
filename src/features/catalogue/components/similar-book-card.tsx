import { ArrowRight, MapPin } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import bookImage from '@/assets/book.png'
import { Button } from '@/components/ui/button'
import type { CatalogueBook } from '../types'

export function SimilarBookCard({ book }: { book: CatalogueBook }) {
  const navigate = useNavigate()

  return (
    <article className="flex gap-3 rounded-lg border border-white/45 bg-white/30 p-2.5 shadow-[0_6px_18px_rgba(167,139,250,.16)] backdrop-blur-sm transition hover:bg-white/45">
      <div className="flex size-20 shrink-0 items-center justify-center rounded-md border border-white/55 bg-white/45 p-2">
        <img alt="" className="h-full w-full object-contain" src={bookImage} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="line-clamp-2 text-[14px] font-semibold leading-5 text-content-primary">
          {book.title}
        </h3>
        <p className="truncate text-[13px] text-content-secondary">
          {book.author}
        </p>
        <div className="flex items-center gap-1 text-[12px] text-content-muted">
          <MapPin size={13} />
          {book.location}
        </div>
        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="text-[13px] font-semibold text-content-primary">
            {book.price != null ? `${book.price} UAH` : book.intent}
          </span>
          <Button
            aria-label={`Open ${book.title}`}
            size="icon-sm"
            type="button"
            variant="cosmicOutline"
            className="size-8 bg-white/35"
            onClick={() => {
              void navigate({
                to: '/books/$bookId',
                params: { bookId: book.id },
              })
            }}
          >
            <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </article>
  )
}
