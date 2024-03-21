import { StaticImageData } from 'next/image'

import { iconNames } from '@/app/components/ui/Icon/config'

import postImage from '@assets/post.png'
import userImage1 from '@assets/userImage.png'
import userImage2 from '@assets/userImage2.png'
import userImage3 from '@assets/userImage3.png'
import userImage4 from '@assets/userImage4.png'

export const featurePost = {
  image: postImage,
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

type TIconKey = keyof typeof iconNames
export const authors: {
  id: number
  imageUrl: StaticImageData
  name: string
  jobPosition: string
  links: {
    [key in 'facebook' | 'twitter' | 'instagram' | 'linkedin']: string
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
