export interface IPostProps {
  createdDate: string
  createdBy: string
  description: string
  image?: string
  title: string
  isPreviewPost?: boolean
  size?: 'lg' | 'md' | 'xl'
}
