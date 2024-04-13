import Image from 'next/image'

import { getPostById } from '@/api'
import { Post } from '@/app/components/entities/Post'
import { UserPreview } from '@/app/components/entities/user/UserPreview'
import { JoinUs } from '@/app/components/shared/JoinUs'
import { Icon } from '@/app/components/ui/Icon'

import { nextPosts } from './BlogPost.config'

import styles from './BlogPost.module.scss'

const BlogPost = async ({ params }: { params: { id: string } }) => {
  const post = await getPostById(+params.id)

  const category = post.category.toLowerCase() as 'business' | 'technology' | 'startup' | 'economy'

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.info}>
          <UserPreview imageUrl={post.user.avatar} isPostPage name={post.user.name} city={post.createdDate} />
          <h1>{post.title}</h1>
          <div className={styles.category}>
            <Icon name={category} />
            <h4>{post.category}</h4>
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <Image src={post.image} alt='post' width={1000} height={580} />
      </div>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
          <p>{post.description}</p>
        </div>
      </div>
      <section className={styles.readNext}>
        <h2>What to read next</h2>
        <div className={styles.wrapper}>
          {nextPosts.map(({ id, image, size, createdBy, createdDate, title, description }) => (
            <Post
              key={id}
              image={image}
              size={size}
              createdBy={createdBy}
              createdDate={createdDate}
              title={title}
              description={description}
            />
          ))}
        </div>
      </section>
      <JoinUs />
    </div>
  )
}
export default BlogPost
