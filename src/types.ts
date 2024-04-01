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
  first: number
  prev: any
  next: any
  last: number
  pages: number
  items: number
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
