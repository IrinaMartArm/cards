import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from './'

const meta = {
  args: {
    checked: true,
  },
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Components/CheckBox',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
