import { Post } from '../components/entities/Post'

import { Banner } from './components/banner'
import { allPosts, featurePost } from './config'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.root}>
      <Banner />
      <div className={styles.posts}>
        <div className={styles.featurePost}>
          <h3>Featured Post</h3>
          <Post {...featurePost} />
        </div>
        <div className={styles.allPosts}>
          <h3>All Posts</h3>
          {allPosts.map(({ id, title, description, createdBy, createdDate }) => (
            <Post
              key={id}
              isPreviewPost
              createdBy={createdBy}
              createdDate={createdDate}
              description={description}
              title={title}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
