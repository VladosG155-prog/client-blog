import Image from 'next/image'
import { getAllUsers } from '@/api'
import { UserCard } from '@/app/components/entities/user/UserCard'
import { JoinUs } from '@/app/components/shared/JoinUs'
import { MotionDiv, MotionSection } from '@/app/components/shared/Motion'

import { Counter } from './components/Counter'

import styles from './AboutUs.module.scss'

import aboutUsMore1 from '@assets/about-us-more-1.png'
import aboutUsMore2 from '@assets/about-us-more2.png'
import aboutImage from '@assets/aboutImage.png'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 }
}

const AboutUs = async () => {
  const authors = await getAllUsers()

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.topInfo}>
          <MotionDiv
            variants={variants}
            animate='enter'
            initial='hidden'
            transition={{ type: 'linear' }}
            className={styles.whiteBlock}
          >
            <h5>ABOUT US</h5>
            <h1>We are a team of content writers who share their learnings</h1>
          </MotionDiv>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <Image src={aboutImage} alt='about-us-overview' />
        <div className={styles.stats}>
          <div>
            <h1>
              <Counter count={12} />+
            </h1>
            <p>Blogs Published</p>
          </div>
          <div>
            <h1>
              <Counter count={18} />
              K+
            </h1>
            <p>Views on Finsweet</p>
          </div>
          <div>
            <h1>
              <Counter count={30} />
              K+
            </h1>
            <p>Total active Users</p>
          </div>
        </div>
        <div className={styles.lines}>
          <div></div>
          <div></div>
        </div>
      </div>
      <MotionSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.about}
      >
        <div>
          <h5>Our mision</h5>
          <h2>Creating valuable content for creatives all around the world</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
            adipiscing at in tellus.
          </p>
        </div>
        <div>
          <h5>Our Vision</h5>
          <h3>A platform that empowers individuals to improve</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
            adipiscing at in tellus.
          </p>
        </div>
      </MotionSection>
      <section className={styles.more}>
        <div className={styles.first}>
          <div>
            <div>
              <h2>Our team of creatives</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
          </div>
          <Image src={aboutUsMore1} alt='about-us-more' />
        </div>
        <div className={styles.second}>
          <div>
            <div>
              <h2>Why we started this Blog</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
          </div>
          <Image src={aboutUsMore2} alt='about-us-more' />
        </div>
      </section>
      <section className={styles.authors}>
        <h2>List of Authors</h2>
        <div className={styles.wrapper}>
          {authors.map(({ id, name, avatar, links, job }) => (
            <UserCard key={id} id={id} name={name} imageUrl={avatar} links={links} jobPosition={job} />
          ))}
        </div>
      </section>
      <JoinUs />
    </div>
  )
}
export default AboutUs
