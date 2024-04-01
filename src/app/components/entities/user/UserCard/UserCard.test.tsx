import { render, screen } from '@testing-library/react'

import { UserCard } from '.'

describe('UserCard component', () => {
  const mockUser = {
    id: '123',
    imageUrl: 'http://user-image.jpg',
    name: 'John Doe',
    jobPosition: 'Software Engineer',
    links: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    }
  }

  it('renders correctly', () => {
    render(<UserCard {...mockUser} />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    expect(screen.getByAltText('user')).toBeInTheDocument()
    expect(screen.getByTestId('user-link')).toHaveAttribute('href', '/authors/123')
  })
})
