import Link from 'next/link'

import { Form } from './components/Form'

import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.root}>
      <div className={styles.start}>
        <h6>Contact us</h6>
        <h1>Let’s Start a Conversation</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim.
        </p>
      </div>
      <div className={styles.info}>
        <div>
          <h6>Working hours</h6>
          <h5>
            Monday To Friday <br /> 9:00 AM to 8:00 PM
          </h5>
          <p>Our Support Team is available 24/7</p>
        </div>
        <div>
          <h6>Contact Us</h6>
          <h5>
            <Link href='tel:020 7993 2905'>020 7993 2905</Link>
          </h5>
          <p>
            <Link href='mailto: hello@finsweet.com'>hello@finsweet.com</Link>
          </p>
        </div>
      </div>

      <Form />
    </div>
  )
}

export default Contact
