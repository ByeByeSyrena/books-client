import {
  ArrowLeft,
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  Gift,
  Heart,
  MapPin,
  ShoppingCart,
  Star,
  X,
} from 'lucide-react'
import { Link, useParams } from '@tanstack/react-router'
import ImageGallery from 'react-image-gallery'
import { useRef, useState } from 'react'
import 'react-image-gallery/build/image-gallery.css'
import bookImage from '@/assets/book.png'
import { Button } from '@/components/ui/button'
import {
  getCatalogueBookById,
  getSimilarCatalogueBooks,
} from '../catalogue-books.config'
import { SimilarBookCard } from './similar-book-card'
import type { CatalogueBookIntent } from '../types'

const INTENT_LABELS: Record<CatalogueBookIntent, string> = {
  sale: 'For sale',
  swap: 'For swap',
  free: 'Free',
}

const ACTION_ICONS = {
  sale: ShoppingCart,
  swap: ArrowLeftRight,
  free: Gift,
} satisfies Record<CatalogueBookIntent, typeof ShoppingCart>

const BOOK_GALLERY_LABELS = [
  'Cover',
  'Back cover',
  'Spine',
  'Pages / edges',
  'Inside pages',
  'Defects',
]

const BOOK_GALLERY_IMAGES = BOOK_GALLERY_LABELS.map((label) => ({
  original: bookImage,
  thumbnail: bookImage,
  originalAlt: label,
  thumbnailAlt: label,
  description: label,
}))

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function BookDetailsPage() {
  const { bookId } = useParams({ from: '/books/$bookId' })
  const similarRailRef = useRef<HTMLDivElement>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isZoomOpen, setIsZoomOpen] = useState(false)
  const book = getCatalogueBookById(bookId)
  const similarBooks = getSimilarCatalogueBooks(bookId)

  if (!book) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-16 text-center">
        <h1 className="m-0 text-[30px] text-content-primary">Book not found</h1>
        <Button asChild variant="grape">
          <Link to="/">
            <ArrowLeft size={16} />
            Back to catalogue
          </Link>
        </Button>
      </main>
    )
  }

  const ActionIcon = ACTION_ICONS[book.intent]

  function scrollSimilarBooks(direction: 'left' | 'right') {
    similarRailRef.current?.scrollBy({
      left: direction === 'left' ? -360 : 360,
      behavior: 'smooth',
    })
  }

  return (
    <main className="flex flex-1 flex-col gap-6 px-4 py-6 md:px-8">
      <section className="grid gap-8 lg:grid-cols-[minmax(320px,560px)_1fr]">
        <div className="book-details-gallery min-w-0">
          <ImageGallery
            items={BOOK_GALLERY_IMAGES}
            showBullets={false}
            showFullscreenButton
            showPlayButton={false}
            showThumbnails
            thumbnailPosition="bottom"
            onClick={() => setIsZoomOpen(true)}
            onSlide={setActiveImageIndex}
          />
        </div>

        <div className="flex min-w-0 flex-col gap-5 py-1 lg:py-4">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {book.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-transparent px-3 py-1 text-[13px] font-semibold text-content-on-gradient shadow-[0_8px_18px_var(--glow-purple)] [background:linear-gradient(to_bottom,rgba(255,255,255,0.22),rgba(255,255,255,0)_42%)_padding-box,var(--gradient-purple-glow)_padding-box,var(--gradient-purple-glow-border)_border-box]"
                >
                  {genre}
                </span>
              ))}
            </div>
            <h1 className="m-0 text-[40px] leading-[1.05] text-content-primary">
              {book.title}
            </h1>
            <p className="mt-3 text-[20px] font-medium text-content-secondary">
              {book.author}
            </p>
          </div>

          <div className="grid gap-3 text-[15px] text-content-secondary sm:grid-cols-2">
            <div className="rounded-lg border border-white/60 bg-white/35 p-3">
              <div className="text-[12px] uppercase tracking-[0.07em] text-content-muted">
                Condition
              </div>
              <div className="mt-1 font-semibold text-content-primary">
                {book.condition}
              </div>
            </div>
            <div className="rounded-lg border border-white/60 bg-white/35 p-3">
              <div className="text-[12px] uppercase tracking-[0.07em] text-content-muted">
                Location
              </div>
              <div className="mt-1 flex items-center gap-1.5 font-semibold text-content-primary">
                <MapPin size={16} />
                {book.location}
              </div>
            </div>
            <div className="rounded-lg border border-white/60 bg-white/35 p-3">
              <div className="text-[12px] uppercase tracking-[0.07em] text-content-muted">
                Owner rate
              </div>
              <div className="mt-2 flex items-center gap-2 font-semibold text-content-primary">
                <span className="flex size-8 items-center justify-center rounded-full border border-transparent text-[12px] font-bold text-content-on-gradient shadow-[0_8px_18px_var(--glow-purple)] [background:linear-gradient(to_bottom,rgba(255,255,255,0.22),rgba(255,255,255,0)_42%)_padding-box,var(--gradient-purple-glow)_padding-box,var(--gradient-purple-glow-border)_border-box]">
                  {getInitials(book.sellerName)}
                </span>
                <Star size={16} className="fill-[#7861ff] text-[#7861ff]" />
                <span>{book.sellerRating}</span>
              </div>
            </div>
            <div className="rounded-lg border border-white/60 bg-white/35 p-3">
              <div className="text-[12px] uppercase tracking-[0.07em] text-content-muted">
                Offer
              </div>
              <div className="mt-1 font-semibold text-content-primary">
                {book.price != null ? `${book.price} UAH` : INTENT_LABELS[book.intent]}
              </div>
            </div>
          </div>

          <p className="text-[15px] leading-7 text-content-secondary">{book.note}</p>

          <div className="mt-auto flex flex-wrap gap-3">
            <Button variant="grape" size="lg">
              <ActionIcon size={18} />
              {INTENT_LABELS[book.intent]}
            </Button>
            <Button variant="cosmicOutline" size="lg">
              <Heart size={18} />
              Add to wishlist
            </Button>
          </div>
        </div>
      </section>

      {similarBooks.length > 0 && (
        <section className="mt-2">
          <div className="mb-3 flex items-end justify-between gap-3">
            <div>
              <h2 className="m-0 text-[20px] leading-7 text-content-primary">
                Similar propositions
              </h2>
              <p className="text-[13px] text-content-muted">
                Books with nearby genres and offers
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                aria-label="Scroll similar propositions left"
                className="size-8 bg-white/30"
                size="icon-sm"
                type="button"
                variant="cosmicOutline"
                onClick={() => scrollSimilarBooks('left')}
              >
                <ChevronLeft size={16} />
              </Button>
              <Button
                aria-label="Scroll similar propositions right"
                className="size-8 bg-white/30"
                size="icon-sm"
                type="button"
                variant="cosmicOutline"
                onClick={() => scrollSimilarBooks('right')}
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
          <div
            ref={similarRailRef}
            className="scrollbar-hidden flex snap-x gap-3 overflow-x-auto pb-1"
          >
            {similarBooks.map((similarBook) => (
              <div
                key={similarBook.id}
                className="w-[min(300px,80vw)] shrink-0 snap-start"
              >
                <SimilarBookCard book={similarBook} />
              </div>
            ))}
          </div>
        </section>
      )}

      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f172a]/70 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={BOOK_GALLERY_IMAGES[activeImageIndex]?.description}
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            aria-label="Close image preview"
            className="absolute top-5 right-5 flex size-10 items-center justify-center rounded-full border border-white/55 bg-white/85 text-content-primary shadow-[0_12px_32px_rgba(24,24,36,.25)] transition hover:scale-105"
            type="button"
            onClick={() => setIsZoomOpen(false)}
          >
            <X size={20} />
          </button>
          <img
            alt={BOOK_GALLERY_IMAGES[activeImageIndex]?.originalAlt}
            className="max-h-[92svh] max-w-[92vw] scale-110 object-contain drop-shadow-[0_28px_56px_rgba(0,0,0,.38)]"
            src={BOOK_GALLERY_IMAGES[activeImageIndex]?.original}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  )
}
