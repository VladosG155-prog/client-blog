import { iconNames } from '@components/ui/Icon/config'

export interface ICategoryCardProps {
  title: string
  description: string
  iconName: keyof typeof iconNames
}
