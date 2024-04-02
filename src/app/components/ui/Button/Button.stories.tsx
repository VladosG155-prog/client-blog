import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from '.'

const meta = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs'],
  args: { onClick: fn(), variant: 'primary' }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Button'
  }
}

export const Large: Story = {
  args: {
    size: 'md',
    children: 'Button'
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button'
  }
}
