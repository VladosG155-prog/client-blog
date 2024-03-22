import { StaticImageData } from 'next/image'

export interface ITaggedPostProps {
  imageUrl: StaticImageData
  tag: string
  title: string
  description: string
}
