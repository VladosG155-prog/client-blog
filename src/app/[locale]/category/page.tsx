import { getAllPosts } from 'api'

import { TaggedPost } from '@/app/components/entities/Post/TaggedPost'

import { SideBar } from './components/SideBar'

import styles from './page.module.scss'

const Category = async ({ searchParams }: { searchParams: { val: string; tags: string[] | string } }) => {
  const selectedCategory = searchParams.val ?? 'All'

  const posts = await getAllPosts({
    category: selectedCategory === 'All' ? '' : searchParams.val,
    page: '1',
    tags: Array.isArray(searchParams.tags) ? searchParams.tags : [searchParams.tags]
  })

  const data = posts.data || posts

  return (
    <div className={styles.root}>
      <div className={styles.banner}>
        <h1>{selectedCategory}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <p>
          Blog {'>'} {selectedCategory}
        </p>
      </div>
      <div className={styles.wrapper}>
        {data.length > 0 ? (
          <div className={styles.items}>
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
        ) : (
          <h2>Thit category doesn{"'"}t have posts yet</h2>
        )}
        <SideBar />
      </div>
    </div>
  )
}
export default Category
