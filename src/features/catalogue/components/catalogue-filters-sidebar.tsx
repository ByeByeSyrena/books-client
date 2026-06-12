import {
  Banknote,
  ChevronDown,
  CircleCheck,
  HeartHandshake,
  LibraryBig,
  MapPin,
  RotateCcw,
  SlidersHorizontal,
  Truck,
  X,
} from 'lucide-react'
import * as Accordion from '@radix-ui/react-accordion'
import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  FILTER_GROUPS,
  FILTER_INTENTS,
  GENRE_OPTIONS,
  LOCATION_OPTIONS,
  type FilterGroup,
  type SearchOption,
} from '@/features/filters/filters-modal.config'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

function SidebarSection({
  children,
  Icon,
  title,
  value,
}: {
  children: React.ReactNode
  Icon: LucideIcon
  title: string
  value: string
}) {
  return (
    <Accordion.Item
      className="border-b border-white/55 last:border-b-0"
      value={value}
    >
      <Accordion.Header>
        <Accordion.Trigger className="group flex w-full items-center justify-between gap-3 py-4 text-left text-[15px] font-semibold text-content-primary outline-none transition hover:text-[#534ab7] focus-visible:text-[#534ab7]">
          <span className="flex items-center gap-2">
            <Icon size={16} className="text-content-muted" />
            {title}
          </span>
          <ChevronDown
            size={17}
            className="shrink-0 text-content-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-visible pb-5 data-[state=closed]:hidden">
        {children}
      </Accordion.Content>
    </Accordion.Item>
  )
}

function OptionRow({
  defaultChecked,
  label,
  count,
}: {
  defaultChecked?: boolean
  label: string
  count?: number
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-md py-1.5 text-[14px] text-content-secondary transition hover:text-content-primary">
      <input
        className="size-4 rounded border-purple-glow/30 accent-[#7861ff]"
        defaultChecked={defaultChecked}
        type="checkbox"
      />
      <span className="min-w-0 flex-1">{label}</span>
      {count != null && (
        <span className="rounded-md bg-white/45 px-2 py-1 text-[12px] text-content-muted">
          {count}
        </span>
      )}
    </label>
  )
}

function LocationSelect({
  selectedLocationId,
  onSelectLocation,
}: {
  selectedLocationId: string
  onSelectLocation: (locationId: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const selectedLocation = LOCATION_OPTIONS.find(
    (option) => option.id === selectedLocationId,
  )
  const filteredLocations = useMemo(
    () =>
      LOCATION_OPTIONS.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    [searchValue],
  )

  return (
    <div className="relative">
      <button
        className="flex h-10 w-full items-center justify-between rounded-lg border border-purple-glow/20 bg-white/45 px-3 text-left text-[14px] font-medium text-content-primary transition hover:bg-white/65"
        type="button"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        <span className="flex items-center gap-2">
          <MapPin size={15} className="text-content-muted" />
          {selectedLocation?.label ?? 'Choose city'}
        </span>
        <ChevronDown size={16} className="text-content-muted" />
      </button>

      {isOpen && (
        <div className="absolute top-[calc(100%+6px)] left-0 z-20 w-full overflow-hidden rounded-lg border border-white/70 bg-white/95 p-1.5 shadow-[0_16px_40px_rgba(24,24,36,.16)] backdrop-blur">
          <input
            className="mb-1.5 h-9 w-full rounded-md border border-purple-glow/25 bg-white/70 px-3 text-[13px] text-content-primary outline-none focus:border-purple-glow"
            placeholder="Search city"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          {filteredLocations.map((option) => (
            <button
              key={option.id}
              className={cn(
                'flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-[13px] transition hover:bg-[#eeedfe]/70',
                option.id === selectedLocationId
                  ? 'text-[#534ab7]'
                  : 'text-content-secondary',
              )}
              type="button"
              onClick={() => {
                onSelectLocation(option.id)
                setIsOpen(false)
              }}
            >
              <span className="flex-1">{option.label}</span>
              {option.count != null && (
                <span className="text-[11px] text-content-muted">
                  {option.count}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function IntentOptions({
  selectedIntent,
  onSelectIntent,
}: {
  selectedIntent: string
  onSelectIntent: (intent: string) => void
}) {
  return (
    <div className="grid gap-2">
      {FILTER_INTENTS.map(({ Icon, className, label, value }) => {
        const isSelected = value === selectedIntent

        return (
          <button
            key={value}
            className={cn(
              'flex h-10 items-center gap-2 rounded-lg border px-3 text-left text-[14px] font-medium transition',
              isSelected
                ? className
                : 'border-white/60 bg-white/35 text-content-secondary hover:bg-white/55',
            )}
            type="button"
            onClick={() => onSelectIntent(value)}
          >
            <Icon size={16} />
            {label}
          </button>
        )
      })}
    </div>
  )
}

function GenreSelect({
  selectedGenreIds,
  onRemoveGenre,
  onToggleGenre,
}: {
  selectedGenreIds: string[]
  onRemoveGenre: (genreId: string) => void
  onToggleGenre: (genreId: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const selectedGenres = GENRE_OPTIONS.filter((option) =>
    selectedGenreIds.includes(option.id),
  )
  const filteredGenres = useMemo(
    () =>
      GENRE_OPTIONS.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    [searchValue],
  )

  return (
    <div className="space-y-3">
      <div className="relative">
        <button
          className="flex h-10 w-full items-center justify-between rounded-lg border border-purple-glow/20 bg-white/45 px-3 text-left text-[14px] font-medium text-content-primary transition hover:bg-white/65"
          type="button"
          onClick={() => setIsOpen((currentValue) => !currentValue)}
        >
          <span className="flex items-center gap-2">
            <LibraryBig size={15} className="text-content-muted" />
            {selectedGenres.length > 0
              ? `${selectedGenres.length} selected`
              : 'Select genres'}
          </span>
          <ChevronDown size={16} className="text-content-muted" />
        </button>

        {isOpen && (
          <div className="absolute top-[calc(100%+6px)] left-0 z-20 w-full overflow-hidden rounded-lg border border-white/70 bg-white/95 p-1.5 shadow-[0_16px_40px_rgba(24,24,36,.16)] backdrop-blur">
            <input
              className="mb-1.5 h-9 w-full rounded-md border border-purple-glow/25 bg-white/70 px-3 text-[13px] text-content-primary outline-none focus:border-purple-glow"
              placeholder="Search genre"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            {filteredGenres.length > 0 ? (
              filteredGenres.map((option) => (
                <label
                  key={option.id}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-[13px] text-content-secondary transition hover:bg-[#eeedfe]/70 hover:text-content-primary"
                >
                  <input
                    checked={selectedGenreIds.includes(option.id)}
                    className="size-3.5 accent-[#7861ff]"
                    type="checkbox"
                    onChange={() => onToggleGenre(option.id)}
                  />
                  <span className="flex-1">{option.label}</span>
                  {option.count != null && (
                    <span className="text-[11px] text-content-muted">
                      {option.count}
                    </span>
                  )}
                </label>
              ))
            ) : (
              <div className="px-2 py-2 text-[12px] text-content-muted">
                No genres found
              </div>
            )}
          </div>
        )}
      </div>

      {selectedGenres.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {selectedGenres.map((option: SearchOption) => (
            <span
              key={option.id}
              className="inline-flex items-center gap-1 rounded-lg border border-purple-glow/30 bg-[#eeedfe]/70 px-2.5 py-1.5 text-[12px] font-medium text-[#3c3489]"
            >
              {option.label}
              <button
                aria-label={`Remove ${option.label}`}
                className="text-[#534ab7] transition hover:text-[#7861ff]"
                type="button"
                onClick={() => onRemoveGenre(option.id)}
              >
                <X size={13} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function FilterGroupOptions({ group }: { group: FilterGroup }) {
  return (
    <div className="space-y-1">
      {group.options.map((option) => (
        <OptionRow
          key={option.id}
          count={option.count}
          defaultChecked={option.defaultChecked}
          label={option.label}
        />
      ))}
    </div>
  )
}

function PriceRange() {
  return (
    <div className="flex items-center gap-2">
      <input
        className="h-10 min-w-0 flex-1 rounded-lg border border-purple-glow/20 bg-white/45 px-3 text-[14px] text-content-primary outline-none focus:border-purple-glow focus:bg-white/70"
        min={0}
        placeholder="Min"
        type="number"
      />
      <span className="text-content-muted">-</span>
      <input
        className="h-10 min-w-0 flex-1 rounded-lg border border-purple-glow/20 bg-white/45 px-3 text-[14px] text-content-primary outline-none focus:border-purple-glow focus:bg-white/70"
        min={0}
        placeholder="Max"
        type="number"
      />
    </div>
  )
}

function SortSelect() {
  return (
    <Select defaultValue="best">
      <SelectTrigger className="h-10 w-full rounded-lg border-purple-glow/20 bg-white/45 px-3 text-[14px] text-content-primary hover:bg-white/65">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="best">Best match</SelectItem>
        <SelectItem value="newest">Newest first</SelectItem>
        <SelectItem value="price-asc">Price: low to high</SelectItem>
        <SelectItem value="price-desc">Price: high to low</SelectItem>
        <SelectItem value="nearest">Nearest first</SelectItem>
      </SelectContent>
    </Select>
  )
}

export function CatalogueFiltersSidebar() {
  const [selectedIntent, setSelectedIntent] = useState('swap')
  const [selectedGenreIds, setSelectedGenreIds] = useState(['genre-fantasy'])
  const [selectedLocationId, setSelectedLocationId] = useState('location-kyiv')

  function toggleGenre(genreId: string) {
    setSelectedGenreIds((currentGenreIds) =>
      currentGenreIds.includes(genreId)
        ? currentGenreIds.filter((currentGenreId) => currentGenreId !== genreId)
        : [...currentGenreIds, genreId],
    )
  }

  return (
    <aside className="app-glass-surface scrollbar-hidden sticky top-24 max-h-[calc(100svh-120px)] w-full overflow-y-auto rounded-xl p-4 shadow-[0_16px_40px_var(--glow-fade-purple)] lg:w-[280px] lg:shrink-0">
      <div className="mb-2 flex justify-end">
        <Button
          aria-label="Reset filters"
          className="rounded-full"
          size="icon-sm"
          type="button"
          variant="cosmicOutline"
        >
          <RotateCcw size={15} />
        </Button>
      </div>

      <Accordion.Root
        className="space-y-0"
        defaultValue={[
          'location',
          'sort',
          'intent',
          'genre',
          'condition',
          'price',
          'delivery',
        ]}
        type="multiple"
      >
        <SidebarSection Icon={MapPin} title="Location" value="location">
          <LocationSelect
            selectedLocationId={selectedLocationId}
            onSelectLocation={setSelectedLocationId}
          />
        </SidebarSection>

        <SidebarSection Icon={SlidersHorizontal} title="Sort by" value="sort">
          <SortSelect />
        </SidebarSection>

        <SidebarSection Icon={HeartHandshake} title="Intent" value="intent">
          <IntentOptions
            selectedIntent={selectedIntent}
            onSelectIntent={setSelectedIntent}
          />
        </SidebarSection>

        <SidebarSection Icon={LibraryBig} title="Genre" value="genre">
          <GenreSelect
            selectedGenreIds={selectedGenreIds}
            onRemoveGenre={toggleGenre}
            onToggleGenre={toggleGenre}
          />
        </SidebarSection>

        <SidebarSection Icon={CircleCheck} title="Condition" value="condition">
          <FilterGroupOptions group={FILTER_GROUPS[0]} />
        </SidebarSection>

        <SidebarSection Icon={Banknote} title="Price range" value="price">
          <PriceRange />
        </SidebarSection>

        <SidebarSection Icon={Truck} title="Delivery" value="delivery">
          <FilterGroupOptions group={FILTER_GROUPS[1]} />
        </SidebarSection>
      </Accordion.Root>
    </aside>
  )
}
