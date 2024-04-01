import { getAllPosts } from 'api'

import { TaggedPost } from '@/app/components/entities/Post/TaggedPost'
import { CategoriesList } from '@/app/components/shared/CategoriesList'
import { JoinUs } from '@/app/components/shared/JoinUs'

import { BlogBanner } from './components/Banner'
import { Pagination } from './components/Pagination'

import styles from './page.module.scss'

const Blog = async ({ searchParams }: { searchParams: { page: string } }) => {
  const posts = await getAllPosts({ page: searchParams.page, category: '', tags: undefined })

  console.log('@posts', posts)

  const data = posts.data || posts

  return (
    <div>
      <BlogBanner />
      <section className={styles.posts}>
        <h1 id='posts'>All posts</h1>
        <hr />
        <div></div>
        <div>
          {data.map(({ id, image, title, description, category }) => (
            <TaggedPost
              key={id}
              id={+id}
              imageUrl={image}
              title={title}
              description={description}
              category={category}
            />
          ))}
        </div>
        <Pagination hasNextPage={posts.next} hasPrevPage={posts.prev} />
      </section>
      <CategoriesList title='All Categories' />
      <JoinUs />
    </div>
  )
}

export default Blog
