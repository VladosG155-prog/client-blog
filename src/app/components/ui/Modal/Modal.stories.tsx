import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '.'

import { IModalProps } from './types'

const meta = {
  title: 'ui/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<IModalProps>

export const Primary: Story = {
  args: {
    children: 'modal'
  }
}
