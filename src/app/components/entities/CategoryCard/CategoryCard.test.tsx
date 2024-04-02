import { render, screen } from '@testing-library/react'

import { CategoryCard } from '.'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

describe('CategoryCard component', () => {
  const mockCategory = {
    title: 'Technology',
    description: 'Lorem ipsum dolor sit amet',
    iconName: 'technology',
    isSmallCard: false
  }

  it('renders correctly', () => {
    render(<CategoryCard {...mockCategory} iconName='technology' />)
    expect(screen.getByText('Technology')).toBeInTheDocument()
    expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument()
    expect(screen.getByTestId('category-card')).toBeInTheDocument()
  })
})
