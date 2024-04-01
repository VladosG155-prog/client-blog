import Image from 'next/image'

import { getUserById } from 'api'
import { TaggedPost } from '@/app/components/entities/Post/TaggedPost'
import { Links } from '@/app/components/shared/Links'

import styles from './page.module.scss'

const Author = async ({ params }: { params: { id: string } }) => {
  const author = await getUserById(+params.id)

  return (
    <div className={styles.root}>
      <div className={styles.banner}>
        <Image src={author.avatar} alt='author' width={250} height={300} />
        <div className={styles.text}>
          <h2>Hey there, I’m {author.name} and welcome to my Blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
            adipiscing at in tellus.
          </p>
          <Links links={author.links} />
        </div>
        <div className={styles.lines}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.posts}>
        <h1>My Posts</h1>
        {author.posts.map(({ id, image, title, description, category }) => (
          <TaggedPost key={id} id={+id} imageUrl={image} title={title} description={description} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Author
