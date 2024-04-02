export interface IUserCardProps {
  id: string
  imageUrl: string
  name: string
  jobPosition: string
  links: {
    [key in 'instagram' | 'linkedin' | 'facebook' | 'twitter']: string
  }
}
