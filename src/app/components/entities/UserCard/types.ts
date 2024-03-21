import { iconNames } from '@components/ui/Icon/config'
import { StaticImageData } from 'next/image'

export interface IUserCardProps {
  imageUrl: StaticImageData
  name: string
  jobPosition: string
  links: {
    [key in 'facebook' | 'twitter' | 'instagram' | 'linkedin']: string
  }
}
