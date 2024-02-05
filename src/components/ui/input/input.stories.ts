import { Input } from '@/components/ui/input/Input'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    variant: {
      control: { type: ['text', 'password', 'search'] },
      options: [],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    disabled: false,
    placeholder: 'Input',
    variant: 'text',
  },
}
export const Password: Story = {
  args: {
    disabled: false,
    placeholder: 'Input',
    variant: 'password',
  },
}
