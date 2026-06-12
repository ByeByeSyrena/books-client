import { LayoutGrid } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal/modal-context'
import discoverBg from '@/assets/discover-background.png'
import bookImage from '@/assets/book.png'

function DiscoverModalContent({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="cosmicOutline"
        onClick={onNavigate}
        className="
    relative
    h-[150px]
    w-[150px]
    overflow-hidden
    font-sans
    text-[18px]
    font-extrabold
    tracking-[-0.06em]
    text-[#32146f]
  "
      >
        <img
          src={bookImage}
          alt=""
          aria-hidden="true"
          className="
      pointer-events-none
      absolute
      left-1/2
      top-[42%]
      z-0
      w-[220px]
      -translate-x-1/2
      -translate-y-1/2
      select-none
    "
        />

        <span className="relative z-10 mt-auto mb-3">
          Market
        </span>
      </Button>
    </div>
  );
}

export function HeaderNav() {
  const { openModal, closeModal } = useModal()
  const navigate = useNavigate()

  function handleDiscover() {
    openModal({
      title: <span className="font-sans text-[32px] font-extrabold tracking-[-0.06em] text-[#32146f]">Discover</span>,
      content: <DiscoverModalContent onNavigate={() => { closeModal(); navigate({ to: '/' }) }} />,
      overlayImage: discoverBg,
    })
  }

  return (
    <nav className="ml-2 flex items-center gap-1" aria-label="Main navigation">
      <Button variant="grape" size="sm" onClick={handleDiscover}>
        <LayoutGrid size={15} />
        Discover
      </Button>
    </nav>
  )
}
