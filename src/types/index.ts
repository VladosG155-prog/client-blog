export type TSocial = 'facebook' | 'twitter' | 'instagram' | 'linkedin'

export interface IUser {
  avatar: string
  id: string
  name: string
  job: string
  links: Links
  posts?: number[]
}

export interface Links {
  facebook: string
  instagram: string
  twitter: string
  linkedin: string
}

export interface IPostResponse {
  hasNext: boolean
  hasPrev: boolean
  data: IPost[]
}

export interface IPost {
  id: string
  title: string
  category: string
  image: string
  createdBy: string
  createdDate: string
  description: string
  authorId?: number
  authorName?: string
}
