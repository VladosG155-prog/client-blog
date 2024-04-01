import { render, screen } from '@testing-library/react'

import { Icon } from '.'

describe('Icon component', () => {
  test('renders icon by name with default variant', () => {
    render(<Icon name='business' />)

    const button = screen.getByTestId('icon')

    expect(button).toBeInTheDocument()
  })
})
