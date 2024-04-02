import { render, screen } from '@testing-library/react'

import { JoinUs } from '.'

jest.mock('next-intl', () => ({
  useLocale: jest.fn(() => 'en'),
  useTranslations: jest.fn(() => jest.fn((key) => key))
}))

describe('JoinUs component', () => {
  it('renders correctly', () => {
    render(<JoinUs />)
    expect(screen.getByTestId('join-us')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Join Now/i })).toBeInTheDocument()
  })
})
