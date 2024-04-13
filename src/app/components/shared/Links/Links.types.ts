import { TSocial } from '@/types'

export interface ILinksProps {
  links: {
    [key in TSocial]: string
  }
}
