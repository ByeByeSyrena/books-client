import { createFileRoute } from '@tanstack/react-router'
import { CataloguePage } from '@/features/catalogue'

export const Route = createFileRoute('/')({
  component: CataloguePage,
})
