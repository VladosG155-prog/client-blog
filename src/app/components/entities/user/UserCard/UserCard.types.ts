import { TSocial } from '@/types'

export interface IUserCardProps {
  id: string
  imageUrl: string
  name: string
  jobPosition: string
  links: {
    [key in TSocial]: string
  }
}
