'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { getAllUsers } from '@/api'
import { UserCard } from '@/app/components/entities/user/UserCard'
import { IUser } from '@/types'
import { CategoriesList } from '../components/shared/CategoriesList'
import { JoinUs } from '../components/shared/JoinUs'
import { MotionSection } from '../components/shared/Motion'
import withLazyLoad from '../hocs/withLazyLoad'

import { About, Banner, Posts, Review, SpecialPost } from './components/'
import { Companies } from './components/companies'

import styles from './page.module.scss'

const LazyPosts = withLazyLoad(Posts)
const LazyAbout = withLazyLoad(About)
const LazyCategories = withLazyLoad(CategoriesList)
const LazySpecialPost = withLazyLoad(SpecialPost)
const LazyCompanies = withLazyLoad(Companies)
const LazyReview = withLazyLoad(Review)
const LazyJoinUs = withLazyLoad(JoinUs)

const Home = () => {
  const [authors, setAuthors] = useState<IUser[]>([])

  const t = useTranslations()

  useEffect(() => {
    getAllUsers().then((data) => {
      setAuthors(data)
    })
  }, [])

  return (
    <main className={styles.root}>
      <Banner />
      <LazyPosts />
      <LazyAbout />
      <LazyCategories align='center' title={t('Choose A Catagory')} />
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
