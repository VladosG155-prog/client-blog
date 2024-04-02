'use client'

import { getAllUsers } from '@/api'
import { UserCard } from '@/app/components/entities/user/UserCard'
import { CategoriesList } from '../components/shared/CategoriesList'
import { JoinUs } from '../components/shared/JoinUs'

import { About, Banner, Posts, Review, SpecialPost } from './components/'

import styles from './page.module.scss'
import withLazyLoad from '../hocs/withLazyLoad'
import { Companies } from './components/companies'
import { MotionSection } from '../components/shared/Motion'

const LazyPosts = withLazyLoad(Posts)
const LazyAbout = withLazyLoad(About)
const LazyCategories = withLazyLoad(CategoriesList)
const LazySpecialPost = withLazyLoad(SpecialPost)
const LazyCompanies = withLazyLoad(Companies)
const LazyReview = withLazyLoad(Review)
const LazyJoinUs = withLazyLoad(JoinUs)
const Home = async () => {
  const authors = await getAllUsers()

  return (
    <main className={styles.root}>
      <Banner />
      <LazyPosts />
      <LazyAbout />
      <LazyCategories align='center' title='Choose A Catagory' />
      <LazySpecialPost />
      <MotionSection className={styles.authors}>
        <h2>List of Authors</h2>
        <div className={styles.wrapper}>
          {authors.map(({ id, name, avatar, links, job }) => (
            <UserCard key={id} id={id} name={name} imageUrl={avatar} links={links} jobPosition={job} />
          ))}
        </div>
      </MotionSection>
      <LazyCompanies />
      <LazyReview />
      <LazyJoinUs />
    </main>
  )
}
export default Home
