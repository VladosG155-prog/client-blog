export interface ILinksProps {
  links: {
    [key in 'facebook' | 'instagram' | 'twitter' | 'linkedin']: string
  }
}
