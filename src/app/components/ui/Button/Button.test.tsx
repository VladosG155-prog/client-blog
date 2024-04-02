import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from '.'

describe('Button component', () => {
  test('renders with default variant', () => {
    const onClickMock = jest.fn()
    render(
      <Button onClick={onClickMock} variant='primary'>
        Click me
      </Button>
    )

    const button = screen.getByText('Click me')

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('root')
    expect(button).toHaveAttribute('data-variant', 'primary')
  })

  test('calls onClick prop when clicked', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(
      <Button onClick={onClickMock} variant='primary'>
        Click me
      </Button>
    )

    const button = getByText('Click me')
    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
