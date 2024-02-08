import { Card } from '@/components/ui/card'
import { CheckBox } from '@/components/ui/checkBox'
import { DropdownMenuDemo } from '@/components/ui/dropDownMenu/DropDown'
import { Input } from '@/components/ui/input'
import RadioGroupDemo from '@/components/ui/radio-group/RadioGroup'
import Select from '@/components/ui/select/Select'
import Slider from '@/components/ui/slider/Slider'
import { TabsDemo } from '@/components/ui/tabs/TabsDemo'

import { Button } from './components/ui/button'
import out from './images/svg/log-out.svg'

export const items = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

export const tabsOptions = [
  { disabled: false, option: 'Switcher' },
  { disabled: false, option: 'Switcher' },
  { disabled: true, option: 'Switcher' },
  { disabled: false, option: 'Switcher' },
]

export function App() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center' }}
    >
      {/*<div>*/}
      <Button as={'a'} variant={'primary'}>
        <img alt={''} src={out} />
        hello
      </Button>
      <Button variant={'secondary'}>
        <img alt={''} src={out} />
        hello my friend
      </Button>
      <Button fullWidth variant={'primary'}>
        hello
      </Button>
      <Input className={'password'} label={'Input'} placeholder={'input'} type={'password'} />
      <Input className={'text'} label={'Input'} placeholder={'input'} type={'text'} />
      <Input className={'text'} disabled label={'Disabled'} placeholder={'input'} type={'text'} />
      <Input
        className={'search'}
        errorMessage={'error'}
        isShowButton
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
      <Slider />
      <Select items={items} onChange={() => {}} placeholder={'100'} value={''} />
      <TabsDemo tabsOptions={tabsOptions} />
      <DropdownMenuDemo />
    </div>
  )
}
