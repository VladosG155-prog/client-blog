import { render, screen } from '@testing-library/react'

import { Header } from '.'

jest.mock('@/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(() => '/mock-pathname'),
  useParams: jest.fn(() => {
    locale: 'mock'
  })
}))
jest.mock('next-intl', () => ({
  useLocale: jest.fn(() => 'en'),
  useTranslations: jest.fn(() => jest.fn((key) => key))
}))

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header />)
    expect(screen.getByText('Modsen Client Blog')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('About_us')).toBeInTheDocument()
    expect(screen.getByText('Contact_us')).toBeInTheDocument()
    expect(screen.getByText('Video about us')).toBeInTheDocument()
  })
})
