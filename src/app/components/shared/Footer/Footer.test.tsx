import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'

import { Footer } from '.'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null
    }
  }
}))

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key))
}))

describe('Footer component', () => {
  it('renders correctly', () => {
    render(<Footer />)
    const element = screen.getByTestId('footer')
    expect(element).toBeInTheDocument()
  })
})
