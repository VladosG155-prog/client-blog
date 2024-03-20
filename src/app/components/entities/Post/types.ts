import { StaticImageData } from 'next/image'

export interface IPostProps {
  createdDate: string
  createdBy: string
  description: string
  image?: StaticImageData
  title: string
  isPreviewPost?: boolean
}
