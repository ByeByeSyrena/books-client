import {
  ArrowLeftRight,
  Gift,
  Heart,
  Info,
  MapPin,
  ShoppingCart,
  Star,
} from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner'
import bookImage from '@/assets/book.png'
import { cn } from '@/lib/utils'
import type { CatalogueBook, CatalogueBookIntent } from '../types'

const INTENT_LABELS: Record<CatalogueBookIntent, string> = {
  sale: 'For sale',
  swap: 'For swap',
  free: 'Free',
}

const INTENT_CLASS_NAMES: Record<CatalogueBookIntent, string> = {
  sale: 'bg-[#faece7] text-[#9d3a1b]',
  swap: 'bg-[#e6f1fb] text-[#0c447c]',
  free: 'bg-[#eaf3de] text-[#27500a]',
}

const ACTION_ICONS = {
  sale: ShoppingCart,
  swap: ArrowLeftRight,
  free: Gift,
} satisfies Record<CatalogueBookIntent, typeof ShoppingCart>

function BookPrimaryValue({ intent, price }: Pick<CatalogueBook, 'intent' | 'price'>) {
  if (price == null) {
    return (
      <span
        className={cn(
          'rounded-full px-3.5 py-1.5 text-[14px] font-semibold',
          INTENT_CLASS_NAMES[intent],
        )}
      >
        {INTENT_LABELS[intent]}
      </span>
    )
  }

  return (
    <span className="text-[20px] font-semibold text-content-primary">
      {price} UAH
    </span>
  )
}

export function CatalogueBookCard({ book }: { book: CatalogueBook }) {
  const ActionIcon = ACTION_ICONS[book.intent]
  const navigate = useNavigate()

  function openBookDetails() {
    void navigate({
      to: '/books/$bookId',
      params: {
        bookId: book.id,
      },
    })
  }

  function addToWishlist(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    toast.success(`${book.title} was added to your wishlist for swaps`)
  }

  return (
    <article
      className="app-glass-surface group relative cursor-pointer overflow-hidden rounded-xl p-3.5 shadow-[0_12px_32px_var(--glow-fade-purple)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_var(--glow-fade-purple)]"
      role="link"
      tabIndex={0}
      onClick={openBookDetails}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          openBookDetails()
        }
      }}
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <BookPrimaryValue intent={book.intent} price={book.price} />
        <div className="flex shrink-0 gap-2">
          <button
            aria-label={INTENT_LABELS[book.intent]}
            className="flex size-9 items-center justify-center rounded-full border border-gold-warm/70 bg-white/65 text-content-primary shadow-[0_8px_20px_var(--glow-gold)] transition hover:scale-105"
            type="button"
            onClick={(event) => event.stopPropagation()}
          >
            <ActionIcon size={17} />
          </button>
          <button
            aria-label="Add to wishlist"
            className="flex size-9 items-center justify-center rounded-full border border-gold-warm/70 bg-white/65 text-content-primary shadow-[0_8px_20px_var(--glow-gold)] transition hover:scale-105 hover:text-[#d9467f]"
            type="button"
            onClick={addToWishlist}
          >
            <Heart size={17} />
          </button>
        </div>
      </div>

      <h2 className="mb-2 line-clamp-2 min-h-[44px] text-[21px] leading-6 text-content-primary">
        {book.title}
      </h2>

      <div className="relative mb-3 aspect-[9/10] overflow-hidden rounded-xl border border-white/65 bg-white/65 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,.75)]">
        <div className="absolute top-2.5 left-2.5 z-10">
          <div className="group/info relative">
            <button
              aria-label={`More about ${book.title}`}
              className="flex size-7 items-center justify-center rounded-full bg-white/80 text-content-primary shadow-[0_8px_20px_rgba(24,24,36,.14)]"
              type="button"
            >
              <Info size={15} />
            </button>
            <div className="pointer-events-none absolute top-9 left-0 z-20 w-56 rounded-lg border border-white/70 bg-white/95 p-3 text-[12px] leading-5 text-content-secondary opacity-0 shadow-[0_16px_40px_rgba(24,24,36,.18)] transition group-hover/info:opacity-100">
              {book.note}
            </div>
          </div>
        </div>
        <img
          alt=""
          className="mx-auto h-full w-full max-w-[220px] object-contain drop-shadow-[0_14px_20px_rgba(24,24,36,.2)]"
          src={bookImage}
        />
      </div>

      <div className="space-y-2.5">
        <p className="text-[15px] font-medium text-content-secondary">
          {book.author}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {book.genres.map((genre) => (
            <span
              key={genre}
              className="rounded-full bg-[#eeedfe]/80 px-2.5 py-1 text-[12px] font-medium text-[#3c3489]"
            >
              {genre}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-[13px] text-content-muted">
          <span>{book.condition}</span>
          <span>-</span>
          <MapPin size={14} />
          <span>{book.location}</span>
        </div>

        <div
          aria-label={`Owner rate ${book.sellerRating}`}
          className="flex items-center gap-1.5 text-[13px] text-content-muted"
        >
          <Star size={15} className="fill-[#7861ff] text-[#7861ff]" />
          <span>{book.sellerRating}</span>
          <span>owner rate</span>
        </div>

      </div>
    </article>
  )
}
