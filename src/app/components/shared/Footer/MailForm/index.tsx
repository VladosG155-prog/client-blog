'use client'
import { ChangeEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { object, string } from 'yup'

import { Button } from '@/app/components/ui/Button'

import styles from './MailForm.module.scss'

const schema = object({
  user_email: string().email()
})

export const MailForm = () => {
  const [email, setEmail] = useState('')

  const [error, setError] = useState('')

  const validate = async () => {
    try {
      await schema.validate({ user_email: email })
    } catch (error) {
      throw new Error('Please enter a valid email')
    }
  }

  const handleSendForm = async () => {
    setError('')
    try {
      await validate()

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPALTE_ID as string,
        { user_email: email },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        }
      )
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
        console.log(error)
      }
    }
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <div className={styles.root}>
      <h2>Subscribe to our news letter to get latest updates and news</h2>
      <div className={styles.form}>
        <div className={styles.input}>
          <input type='email' name='email' value={email} onChange={handleChangeInput} placeholder='Enter Your Email' />
          {error.length > 0 && <p>{error}</p>}
        </div>
        <Button variant='primary' onClick={handleSendForm}>
          Subscribe
        </Button>
      </div>
    </div>
  )
}
