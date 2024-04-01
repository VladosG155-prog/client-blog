import { render, screen } from '@testing-library/react'

import { Post } from '.'

describe('Post component', () => {
  const mockPost = {
    title: 'Sample Post',
    image: 'http://post-image.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    createdBy: 'John Doe',
    createdDate: '2024-03-31',
    isPreviewPost: false,
    size: 'md'
  }

  it('renders correctly', () => {
    render(
      <Post
        createdDate={mockPost.title}
        createdBy={mockPost.createdBy}
        description={mockPost.description}
        title={mockPost.title}
      />
    )
    expect(screen.getByText('Sample Post')).toBeInTheDocument()
    expect(screen.queryByAltText('post')).not.toBeInTheDocument()
  })

  it('renders correctly in preview mode', () => {
    render(
      <Post
        createdDate={mockPost.title}
        createdBy={mockPost.createdBy}
        description={mockPost.description}
        title={mockPost.title}
        isPreviewPost={true}
      />
    )
    expect(screen.getByText('Sample Post')).toBeInTheDocument()
    expect(screen.queryByAltText('post')).not.toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('renders correctly with medium size', () => {
    render(<Post {...mockPost} size='md' />)
    expect(screen.getByText('Sample Post')).toBeInTheDocument()
    expect(screen.getByAltText('post')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
