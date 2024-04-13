import { IPost, IPostResponse, IUser } from '../types'

const baseUrl = 'https://api-json-server-mauve.vercel.app'

export const getAllPosts = async ({
  category = '',
  page = '1',
  tags = ['']
}: {
  tags?: string[]
  page: string
  category: string
}): Promise<IPostResponse> => {
  const queryByCategory = category.length > 0 ? `category=${category}` : ''

  let queryByTags = ''

  if (tags.length > 0 && tags[0]) {
    tags.forEach((tag) => {
      queryByTags += `&tags_like=${tag}`
    })
  }
  const pagination = `_page=${page}&_limit=5`

  const res = await fetch(`${baseUrl}/posts?${pagination}&${queryByCategory}${queryByTags || ''}`, {
    cache: 'no-store'
  })

  const totalCount = res.headers.get('x-total-count')!

  const totalPages = Math.ceil(+totalCount / 5)

  const hasNext = +page < totalPages

  const hasPrev = +page > 1

  const posts: IPost[] = await res.json()

  return { data: posts, hasNext, hasPrev }
}

export const getPostById = async (id: number) => {
  const res = await fetch(`${baseUrl}/posts/${id}`, { next: { revalidate: 3600 } })
  const post: IPost = await res.json()
  const resUser = await fetch(`${baseUrl}/authors/${post.authorId}`)

  const user: IUser = await resUser.json()

  return { ...post, user }
}

export const getAllUsers = async () => {
  const res = await fetch(`${baseUrl}/authors`)

  const users: IUser[] = await res.json()
  return users
}

export const getUserById = async (id: number) => {
  const resUser = fetch(`${baseUrl}/authors/${id}`)
  const resPost = fetch(`${baseUrl}/posts?authorId=${id}`)

  const response = await Promise.all([resUser, resPost])

  const user: IUser = await response[0].json()
  const posts: IPost[] = await response[1].json()

  return { ...user, posts }
}
