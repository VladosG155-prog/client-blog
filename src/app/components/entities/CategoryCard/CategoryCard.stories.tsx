import type { Meta, StoryObj } from '@storybook/react'
import { CategoryCard } from '.'

const meta = {
  title: 'Entities/CategoryCard',
  component: CategoryCard,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof CategoryCard>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'John Doe',
    iconName: 'business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, incidunt aut. Illum excepturi unde impedit quaerat ipsum dolore perspiciatis rerum distinctio incidunt, doloribus repudiandae est, vel nostrum repellat eveniet maxime.'
  }
}
