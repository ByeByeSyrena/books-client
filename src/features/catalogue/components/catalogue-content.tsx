import { Bell, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CATALOGUE_BOOKS, CATALOGUE_PAGES } from '../catalogue-books.config'
import { getRandomCatalogueResultCopy } from '../catalogue-search-copy.config'
import { CatalogueBookCard } from './catalogue-book-card'

export function CatalogueContent() {
  const [resultCopy] = useState(() =>
    getRandomCatalogueResultCopy(CATALOGUE_BOOKS.length),
  )

  return (
    <main className="min-w-0 flex-1">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="m-0 text-[26px] leading-8 text-content-primary">
            {resultCopy.heading}
          </h1>
          <p className="text-[14px] text-content-muted">
            {resultCopy.countText}
          </p>
        </div>
        <Button variant="cosmicOutline" size="sm" type="button">
          <Bell size={14} />
          Save search
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {CATALOGUE_BOOKS.map((book) => (
          <CatalogueBookCard key={book.id} book={book} />
        ))}
      </div>

      <nav
        aria-label="Catalogue pagination"
        className="mt-8 flex items-center justify-center gap-2"
      >
        <Button
          aria-label="Previous page"
          disabled
          size="icon-sm"
          type="button"
          variant="cosmicOutline"
        >
          <ChevronLeft size={16} />
        </Button>
        {CATALOGUE_PAGES.map((page) => (
          <Button
            key={page}
            size="icon-sm"
            type="button"
            variant={page === 1 ? 'grape' : 'cosmicOutline'}
          >
            {page}
          </Button>
        ))}
        <Button aria-label="Next page" size="icon-sm" type="button" variant="cosmicOutline">
          <ChevronRight size={16} />
        </Button>
      </nav>
    </main>
  )
}
