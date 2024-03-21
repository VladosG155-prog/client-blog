import { CategoryCard } from '@components/entities/CategoryCard'
import { Post } from '@components/entities/Post'
import { UserCard } from '@components/entities/UserCard'
import { ROUTES } from '@constants/routes'
import Link from 'next/link'

import { About } from './components/about'
import { Banner } from './components/banner'
import { SpecialPost } from './components/specialPost'
import { allPosts, authors, featurePost } from './config'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.root}>
      <Banner />
      <section className={styles.posts}>
        <div className={styles.featurePost}>
          <div className={styles.header}>
            <h3>Featured Post</h3>
          </div>
          <div className={styles.singlePost}>
            <Post {...featurePost} />
          </div>
        </div>
        <div className={styles.allPosts}>
          <div className={styles.header}>
            <h3>All Posts</h3>
            <Link href={ROUTES.POSTS}>View All</Link>
          </div>
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
      </section>
      <About />
      <section className={styles.cards}>
        <h2>Choose A Catagory</h2>
        <div className={styles.wrapper}>
          <CategoryCard
            iconName='business'
            title='Business'
            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
          />
          <CategoryCard
            iconName='startup'
            title='Startup'
            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
          />
          <CategoryCard
            iconName='economy'
            title='Economy'
            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
          />
          <CategoryCard
            iconName='tech'
            title='Technology'
            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
          />
        </div>
      </section>
      <SpecialPost />
      <section className={styles.authors}>
        <h2>List of Authors</h2>
        <div className={styles.wrapper}>
          {authors.map(({ id, name, imageUrl, links, jobPosition }) => (
            <UserCard key={id} name={name} imageUrl={imageUrl} links={links} jobPosition={jobPosition} />
          ))}
        </div>
      </section>
    </main>
  )
}
