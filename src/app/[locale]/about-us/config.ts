import { StaticImageData } from 'next/image'

import { TSocial } from '@/types'

import userImage1 from '@assets/userImage.png'
import userImage2 from '@assets/userImage2.png'
import userImage3 from '@assets/userImage3.png'
import userImage4 from '@assets/userImage4.png'

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
  },
  {
    id: 5,
    imageUrl: userImage1,
    name: 'Floyd Miles',
    jobPosition: 'Content Writer @Company',
    links: { facebook: 'link1', twitter: 'link2', instagram: 'link3', linkedin: 'link4' }
  },
  {
    id: 6,
    imageUrl: userImage2,
    name: 'Dianne Russell',
    jobPosition: 'Content Writer @Company',
    links: { facebook: 'link1', twitter: 'link2', instagram: 'link3', linkedin: 'link4' }
  },
  {
    id: 7,
    imageUrl: userImage3,
    name: 'Jenny Wilson',
    jobPosition: 'Content Writer @Company',
    links: { facebook: 'link1', twitter: 'link2', instagram: 'link3', linkedin: 'link4' }
  },
  {
    id: 8,
    imageUrl: userImage4,
    name: 'Leslie Alexander',
    jobPosition: 'Content Writer @Company',
    links: { facebook: 'link1', twitter: 'link2', instagram: 'link3', linkedin: 'link4' }
  }
]

export const counters = [
  { id: 1, title: 'Blogs Published', count: 12 },
  { id: 2, title: 'Views on Finsweet', count: 18 },
  { id: 3, title: 'Total active Users', count: 30 }
]
