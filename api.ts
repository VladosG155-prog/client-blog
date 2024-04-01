import { IPost, IPostResponse, IUser } from './src/types'

const baseUrl = 'https://api-json-server-mauve.vercel.app'

export const getAllPosts = async ({
  category = '',
  page = '1',
  tags = ['']
}: {
  tags?: string[]
  page: string
  category: string
}) => {
  const queryByCategory = category.length > 0 ? `category=${category}` : ''

  let queryByTags = ''

  if (tags.length > 0 && tags[0]) {
    tags.forEach((tag) => {
      queryByTags += `&tags_like=${tag}`
    })
  }
  const pagination = `_page=${page}&_per_page=5`

  const res = await fetch(`${baseUrl}/posts?${pagination}&${queryByCategory}${queryByTags || ''}`)
  console.log(`${baseUrl}/posts?${pagination}${queryByCategory}${queryByTags || ''}`)

  const posts: IPostResponse = await res.json()

  return posts
}

export const getPostById = async (id: number) => {
  const res = await fetch(`${baseUrl}/posts/${id}`)
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
