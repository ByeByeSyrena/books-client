import type { CatalogueBook } from './types'

export const CATALOGUE_BOOKS: CatalogueBook[] = [
  {
    id: 'blade-itself',
    title: 'The Blade Itself',
    author: 'Joe Abercrombie',
    genres: ['Fantasy', 'Fiction'],
    sellerName: 'Olena K.',
    sellerRating: 4.7,
    condition: 'Good',
    location: 'Kyiv',
    intent: 'sale',
    price: 120,
    note: 'First in the First Law trilogy. Good used condition. Meet in person or Nova Poshta.',
  },
  {
    id: 'name-of-the-wind',
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    genres: ['Fantasy', 'Fiction'],
    sellerName: 'Marta L.',
    sellerRating: 4.9,
    condition: 'Like new',
    location: 'Kyiv',
    intent: 'swap',
    note: 'Like new hardcover. Clean pages and no markings.',
  },
  {
    id: 'wizard-earthsea',
    title: 'A Wizard of Earthsea',
    author: 'Ursula K. Le Guin',
    genres: ['Fantasy', 'Young adult'],
    sellerName: 'Ira S.',
    sellerRating: 4.6,
    condition: 'Good',
    location: 'Lviv',
    intent: 'swap',
    note: 'Good condition, minor shelf wear. Available for swap in Lviv.',
  },
  {
    id: 'hobbit',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genres: ['Fantasy', 'Classics'],
    sellerName: 'Dmytro P.',
    sellerRating: 4.8,
    condition: 'Like new',
    location: 'Kyiv',
    intent: 'sale',
    price: 180,
    note: 'Ukrainian translation, 2019 edition. No highlights or markings.',
  },
  {
    id: 'mistborn',
    title: 'Mistborn',
    author: 'Brandon Sanderson',
    genres: ['Fantasy', 'Sci-fi'],
    sellerName: 'Anna M.',
    sellerRating: 4.5,
    condition: 'Acceptable',
    location: 'Odesa',
    intent: 'free',
    note: 'Some page yellowing, all text fully readable. Pickup in Odesa only.',
  },
  {
    id: 'assassins-apprentice',
    title: "Assassin's Apprentice",
    author: 'Robin Hobb',
    genres: ['Fantasy', 'Fiction'],
    sellerName: 'Nazar T.',
    sellerRating: 4.4,
    condition: 'Good',
    location: 'Kharkiv',
    intent: 'swap',
    note: 'Paperback English edition. Light crease on spine.',
  },
]

export const CATALOGUE_PAGES = [1, 2, 3, 12]

export function getCatalogueBookById(bookId: string) {
  return CATALOGUE_BOOKS.find((book) => book.id === bookId)
}

export function getSimilarCatalogueBooks(bookId: string) {
  const currentBook = getCatalogueBookById(bookId)

  if (!currentBook) {
    return []
  }

  return CATALOGUE_BOOKS.filter((book) => book.id !== bookId)
    .sort((firstBook, secondBook) => {
      const firstScore = firstBook.genres.filter((genre) =>
        currentBook.genres.includes(genre),
      ).length
      const secondScore = secondBook.genres.filter((genre) =>
        currentBook.genres.includes(genre),
      ).length

      return secondScore - firstScore
    })
    .slice(0, 4)
}
