import { Trans } from '@lingui/react/macro'
import { Button } from './components/ui/button'

function App() {
  return (
    <section>
      <h1>
        <Trans>Hello!</Trans>
        <Button variant="secondary">Text</Button>
      </h1>
    </section>
  )
}

export default App
