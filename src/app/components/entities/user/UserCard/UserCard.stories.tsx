import type { Meta, StoryObj } from '@storybook/react'

import { UserCard } from '.'

import { IUserCardProps } from './types'

const meta = {
  title: 'Entities/UserCard',
  component: UserCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof UserCard>

export default meta

type Story = StoryObj<IUserCardProps>

export const Primary: Story = {
  args: {
    name: 'John Doe',
    jobPosition: 'Designer',
    links: {
      facebook: 'gaga',
      linkedin: 'agag',
      instagram: 'gagag',
      twitter: 'gaga'
    },
    imageUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww'
  }
}
