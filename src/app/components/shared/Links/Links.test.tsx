import { render, screen } from '@testing-library/react'

import { Links } from '.'

// Mock the Icon component

const links = {
  facebook: 'https://www.facebook.com',
  twitter: 'https://www.twitter.com',
  instagram: 'https://www.instagram.com',
  linkedin: 'https://www.linkedin.com/'
}

describe('Links component', () => {
  it('renders correct links component', () => {
    render(<Links links={links} />)
    const linkElement = screen.getByTestId('links')
    expect(linkElement).toBeInTheDocument()
  })
})
