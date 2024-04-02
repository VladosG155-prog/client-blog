import { Post } from '@components/entities/Post'
import { ROUTES } from '@constants/routes'
import Link from 'next/link'

import { getAllUsers } from '@/api'
import { UserCard } from '@/app/components/entities/user/UserCard'
import { CategoriesList } from '../components/shared/CategoriesList'
import { JoinUs } from '../components/shared/JoinUs'

import { About } from './components/about'
import { Banner } from './components/banner'
import { Review } from './components/review'
import { SpecialPost } from './components/specialPost'
import { allPosts, companies, featurePost } from './config'

import styles from './page.module.scss'

const Home = async () => {
  const authors = await getAllUsers()

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
            <Link href={ROUTES.BLOG}>View All</Link>
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
      <CategoriesList align='center' title='Choose A Catagory' />
      <SpecialPost />

      <section className={styles.authors}>
        <h2>List of Authors</h2>
        <div className={styles.wrapper}>
          {authors.map(({ id, name, avatar, links, job }) => (
            <UserCard key={id} id={id} name={name} imageUrl={avatar} links={links} jobPosition={job} />
          ))}
        </div>
      </section>

      <section className={styles.companies}>
        <div className={styles.textLogo}>
          <p>We are</p>
          <h4>Featured in</h4>
        </div>
        {companies.map((CompanyLogo, index) => (
          <CompanyLogo key={index} />
        ))}
      </section>
      <Review />
      <JoinUs />
    </main>
  )
}
export default Home
