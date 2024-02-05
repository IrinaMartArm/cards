import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

import { Button } from './components/ui/button'

export function App() {
  return (
    <div>
      <Button className={'button'} variant={'secondary'}>
        hello
      </Button>
      <Input placeholder={'input'} type={'password'} />
      <Card />
    </div>
  )
}
