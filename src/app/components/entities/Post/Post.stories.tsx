import type { Meta, StoryObj } from '@storybook/react'

import { Post } from '.'

const meta = {
  title: 'Entities/Post',
  component: Post,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    image:
      'https://images.unsplash.com/photo-1630476022309-fda8f5edc9ef?q=80&w=2777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
} satisfies Meta<typeof Post>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    createdBy: 'John Doe'
  },
  title:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur veritatis ratione dicta aliquam quas nemo alias maxime reprehenderit omnis explicabo delectus quasi, perferendis pariatur sequi consequatur dignissimos impedit cum iure!'
}
export const Preview: Story = {
  args: {
    isPreviewPost: true,
    createdBy: 'John Doe',
    title:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur veritatis ratione dicta aliquam quas nemo alias maxime reprehenderit omnis explicabo delectus quasi, perferendis pariatur sequi consequatur dignissimos impedit cum iure!'
  }
}
