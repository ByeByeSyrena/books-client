import { Button } from '@/components/ui/button'
import { ADD_BOOK_ACTION, HEADER_ACTIONS } from './header-actions.config'
import { HeaderAccountMenu } from './header-account-menu'
import { IconBtn } from './icon-btn'

export function HeaderActions() {
  const { Icon: AddBookIcon, label: addBookLabel } = ADD_BOOK_ACTION

  return (
    <div className="flex items-center gap-2">
      <Button variant="goldWarm" size="sm">
        <AddBookIcon size={14} />
        {addBookLabel}
      </Button>

      {HEADER_ACTIONS.map(({ Icon, badge, title }) => (
        <IconBtn key={title} title={title} badge={badge}>
          <Icon size={15} />
        </IconBtn>
      ))}

      <HeaderAccountMenu />
    </div>
  )
}
