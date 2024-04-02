import emailjs from '@emailjs/browser'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { MailForm } from '.'

jest.mock('next-intl', () => ({
  useLocale: jest.fn(() => 'en'),
  useTranslations: jest.fn(() => jest.fn((key) => key))
}))

jest.mock('@emailjs/browser', () => ({
  send: jest.fn()
}))

describe('MailForm component', () => {
  it('renders correctly', () => {
    render(<MailForm />)
    expect(screen.getByPlaceholderText('Enter Your Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('validates email input correctly', async () => {
    render(<MailForm />)
    const emailInput = screen.getByPlaceholderText('Enter Your Email')
    const subscribeButton = screen.getByRole('button', { name: 'Subscribe' })

    fireEvent.change(emailInput, { target: { value: 'invalidemail' } })
    fireEvent.click(subscribeButton)

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
      expect(emailjs.send).not.toHaveBeenCalled()
    })
  })

  it('sends form correctly when input is valid', async () => {
    render(<MailForm />)
    const emailInput = screen.getByPlaceholderText('Enter Your Email')
    const subscribeButton = screen.getByRole('button', { name: 'Subscribe' })

    fireEvent.change(emailInput, { target: { value: 'validemail@example.com' } })
    fireEvent.click(subscribeButton)

    await waitFor(() => {
      expect(screen.queryByText('Please enter a valid email')).not.toBeInTheDocument()
      expect(emailjs.send).toHaveBeenCalled()
    })
  })
})
