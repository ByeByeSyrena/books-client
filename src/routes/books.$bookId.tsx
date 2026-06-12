import { createFileRoute } from '@tanstack/react-router'
import { BookDetailsPage } from '@/features/catalogue/components/book-details-page'

export const Route = createFileRoute('/books/$bookId')({
  component: BookDetailsPage,
})
