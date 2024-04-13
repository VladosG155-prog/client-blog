import { StaticImageData } from 'next/image'

import { TSocial } from '@/types'

import userImage1 from '@assets/userImage.png'
import userImage2 from '@assets/userImage2.png'
import userImage3 from '@assets/userImage3.png'
import userImage4 from '@assets/userImage4.png'

export const featurePost = {
  image:
    'https://images.unsplash.com/photo-1630476022309-fda8f5edc9ef?q=80&w=2777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  createdBy: 'John Doe',
  createdDate: 'May 23, 2022',
  description:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
}

export const allPosts = [
  {
    id: 1,
    title: '8 Figma design systems that you can download for free today.',
    createdBy: 'John Doe',
    createdDate: 'May 23, 2022',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  {
    id: 2,
    title: '8 Figma design systems that you can download for free today.',
    createdBy: 'John Doe',
    createdDate: 'May 23, 2022',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  {
    id: 3,
    title: '8 Figma design systems that you can download for free today.',
    createdBy: 'John Doe',
    createdDate: 'May 23, 2022',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  {
    id: 4,
    title: '8 Figma design systems that you can download for free today.',
    createdBy: 'John Doe',
    createdDate: 'May 23, 2022',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  }
]

export const authors: {
  id: number
  imageUrl: StaticImageData
  name: string
  jobPosition: string
  links: {
    [key in TSocial]: string
  }
}[] = [
  {
    id: 1,
    imageUrl: userImage1,
    name: 'Floyd Miles',
    jobPosition: 'Content Writer @Company',
    links: { facebook: 'link1', twitter: 'link2', instagram: 'link3', linkedin: 'link4' }
  },
  {
    id: 2,
    imageUrl: userImage2,
    name: 'Dianne Russell',
    jobPosition: 'Content Writer @Company',
    links: { facebook: 'link1', twitter: 'link2', instagram: 'link3', linkedin: 'link4' }
  },
  {
    id: 3,
    imageUrl: userImage3,
    name: 'Jenny Wilson',
    jobPosition: 'Content Writer @Company',
    links: { facebook: 'link1', twitter: 'link2', instagram: 'link3', linkedin: 'link4' }
  },
  {
    id: 4,
    imageUrl: userImage4,
    name: 'Leslie Alexander',
    jobPosition: 'Content Writer @Company',
    links: { facebook: 'link1', twitter: 'link2', instagram: 'link3', linkedin: 'link4' }
  }
]
