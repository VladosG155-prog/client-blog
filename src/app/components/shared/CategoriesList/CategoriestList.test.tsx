import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'

import { CategoriesList } from '.'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null
    }
  }
}))

describe('CategoriesList component', () => {
  it('renders correctly with default props', () => {
    render(
      <NextIntlClientProvider messages={{}} locale='en'>
        <CategoriesList title='Categories' />
      </NextIntlClientProvider>
    )
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getAllByTestId('category-card')).toHaveLength(4)
  })
  it('renders correctly with custom props', () => {
    render(
      <CategoriesList
        title='Categories'
        align='center'
        direction='column'
        isSmallCard={true}
        activeCategory='Business'
      />
    )
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getAllByTestId('category-card')).toHaveLength(4)
  })
})
