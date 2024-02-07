import { Card } from '@/components/ui/card'
import { CheckBox } from '@/components/ui/checkBox'
import { Input } from '@/components/ui/input'
import RadioGroupDemo from '@/components/ui/radio-group/RadioGroup'

import { Button } from './components/ui/button'
import out from './images/svg/log-out.svg'

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <Button variant={'secondary'}>
        <img alt={''} src={out} />
        hello
      </Button>
      <Button variant={'primary'}>
        <img alt={''} src={out} />
        hello
      </Button>
      <Input className={'password'} label={'Input'} placeholder={'input'} type={'password'} />
      <Input className={'text'} label={'Input'} placeholder={'input'} type={'text'} />
      <Input className={'text'} disabled label={'Disabled'} placeholder={'input'} type={'text'} />
      <Input
        className={'search'}
        errorMessage={'error'}
        placeholder={'input search'}
        type={'search'}
      />
      <Card />
      <CheckBox checked onChange={() => {}} />
      <CheckBox checked disabled onChange={() => {}} />
      <CheckBox checked={false} label={'Check-box'} onChange={() => {}} />
      <CheckBox checked={false} disabled label={'Check-box'} onChange={() => {}} />
      <RadioGroupDemo />
      <RadioGroupDemo disabled />
    </div>
  )
}
