export type CatalogueBookIntent = 'sale' | 'swap' | 'free'

export type CatalogueBook = {
  id: string
  title: string
  author: string
  genres: string[]
  sellerName: string
  sellerRating: number
  condition: string
  location: string
  intent: CatalogueBookIntent
  price?: number
  note: string
}
