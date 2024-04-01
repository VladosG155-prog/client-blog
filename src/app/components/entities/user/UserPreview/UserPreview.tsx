import { render, screen } from '@testing-library/react'

import { UserPreview } from '.'

describe('UserPreview component', () => {
  const mockUser = {
    imageUrl: 'http://user-image.jpg',
    name: 'John Doe',
    city: 'New York',
    isPostPage: false
  }

  it('renders correctly', () => {
    render(<UserPreview {...mockUser} />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByAltText('user-avatar')).toBeInTheDocument()
  })

  it('renders correctly on post page', () => {
    render(<UserPreview {...mockUser} isPostPage={true} />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
