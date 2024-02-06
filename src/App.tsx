import { Card } from '@/components/ui/card'
import { CheckBox } from '@/components/ui/checkBox'
import { CheckBoxBorder } from '@/components/ui/checkBox/CheckBoxBorder'
import { Input } from '@/components/ui/input'

import { Button } from './components/ui/button'
import out from './images/svg/log-out.svg'

export function App() {
  return (
    <div>
      <Button variant={'secondary'}>
        <img alt={''} src={out} />
        hello
      </Button>
      <Button variant={'primary'}>
        <img alt={''} src={out} />
        hello
      </Button>
      <Input className={'password'} placeholder={'input'} type={'password'} />
      <Card />
      <CheckBox checked onChange={() => {}} />
      <CheckBoxBorder checked onChange={() => {}} />
    </div>
  )
}
