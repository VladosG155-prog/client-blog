import { IPostProps } from '@/app/components/entities/Post/Post.types'

import nextPost from '@assets/nextPost.png'

export const nextPosts: Array<IPostProps & { id: number }> = [
  {
    id: 1,
    image: nextPost.src,
    size: 'md',
    createdBy: 'John Doe',
    createdDate: 'Aug 23, 2021',
    title: 'A UX Case Study Creating a Studious Environment for Students',
    description: 'A UX Case Study Creating a Studious Environment for Students'
  },
  {
    id: 2,
    image: nextPost.src,
    size: 'md',
    createdBy: 'John Doe',
    createdDate: 'Aug 23, 2021',
    title: 'A UX Case Study Creating a Studious Environment for Students',
    description: 'A UX Case Study Creating a Studious Environment for Students'
  },
  {
    id: 3,
    image: nextPost.src,
    size: 'md',
    createdBy: 'John Doe',
    createdDate: 'Aug 23, 2021',
    title: 'A UX Case Study Creating a Studious Environment for Students',
    description: 'A UX Case Study Creating a Studious Environment for Students'
  }
]
