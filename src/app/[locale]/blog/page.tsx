import { TaggedPost } from '@/app/components/entities/Post/TaggedPost'
import { CategoriesList } from '@/app/components/shared/CategoriesList'
import { JoinUs } from '@/app/components/shared/JoinUs'

import { BlogBanner } from './components/Banner'
import { posts } from './config'

import styles from './page.module.scss'

const Blog = () => {
  return (
    <div>
      <BlogBanner />
      <section className={styles.posts}>
        <h1>All posts</h1>
        <hr />
        <div>
          {posts.map(({ id, imageUrl, title, description, tag }) => (
            <TaggedPost key={id} imageUrl={imageUrl} title={title} description={description} tag={tag} />
          ))}
        </div>
        <div className={styles.nav}>
          <button className={styles.prev}>{'<'}Prev</button>
          <button className={styles.next}>Next{'>'}</button>
        </div>
      </section>
      <CategoriesList title='All Categories' />
      <JoinUs />
    </div>
  )
}

export default Blog
