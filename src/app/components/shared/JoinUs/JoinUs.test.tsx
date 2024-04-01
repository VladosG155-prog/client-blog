import { render, screen } from '@testing-library/react'

import { JoinUs } from '.'

describe('JoinUs component', () => {
  it('renders correctly', () => {
    render(<JoinUs />)
    expect(screen.getByText(/Join our team to be a part of our story/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt./i)
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Join Now/i })).toBeInTheDocument()
  })
})
