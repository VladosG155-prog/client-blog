import { render, screen } from '@testing-library/react'

import { TaggedPost } from '.'

describe('TaggedPost component', () => {
  const mockPost = {
    id: 123,
    imageUrl: 'http://post-image.jpg',
    category: 'Technology',
    title: 'Sample Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }

  it('renders correctly', () => {
    render(<TaggedPost {...mockPost} />)
    expect(screen.getByText('Technology')).toBeInTheDocument()
    expect(screen.getByText('Sample Post')).toBeInTheDocument()
    expect(screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBeInTheDocument()
    expect(screen.getByAltText('post with tag')).toBeInTheDocument()
  })

  it('navigates to post page when clicked', () => {
    render(<TaggedPost {...mockPost} />)
    const linkElement = screen.getByText('Sample Post').closest('a')
    expect(linkElement).toHaveAttribute('href', '/blog/123')
  })
})
