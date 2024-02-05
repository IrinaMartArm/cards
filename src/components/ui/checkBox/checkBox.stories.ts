import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
