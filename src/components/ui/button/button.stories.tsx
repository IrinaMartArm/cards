import type { Meta, StoryObj } from '@storybook/react'

import out from '../../../images/svg/log-out.svg'
import { Button } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const DisabledPrimary: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const DisabledSecondary: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    variant: 'secondary',
  },
}
export const Link: Story = {
  args: {
    as: 'a',
    children: 'AsLink',
    disabled: false,
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: (
      <>
        <img alt={''} src={out} />
        AsLink
      </>
    ),
    variant: 'primary',
  },
}
