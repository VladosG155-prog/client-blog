import Image from 'next/image'

import { UserPreview } from '@/app/components/entities/user/UserPreview'
import { JoinUs } from '@/app/components/shared/JoinUs'
import { Icon } from '@/app/components/ui/Icon'

import styles from './BlogPost.module.scss'

import postImage from '@assets/post-image.png'
import userImage1 from '@assets/userImage.png'

const BlogPost = ({ params }: { params: { id: string } }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {params.id}
        <UserPreview imageUrl={userImage1} name='Andrew Jonson' city='Posted on 27th January 2022' />
        <h1>Step-by-step guide to choosing great font pairs</h1>
        <div>
          <Icon name='startup' />
          Startup
        </div>
      </div>

      <Image src={postImage} alt='post' />
      <div className={styles.container}>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
          adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae
          ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </p>
      </div>
      <JoinUs />
    </div>
  )
}
export default BlogPost
