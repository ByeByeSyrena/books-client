import { CatalogueContent } from './components/catalogue-content'
import { CatalogueFiltersSidebar } from './components/catalogue-filters-sidebar'

export function CataloguePage() {
  return (
    <section className="flex min-h-full flex-1 flex-col gap-6 px-4 py-6 md:px-6 lg:flex-row lg:items-start lg:px-8">
      <CatalogueFiltersSidebar />
      <CatalogueContent />
    </section>
  )
}
