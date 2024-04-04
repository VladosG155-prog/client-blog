'use client'
import { ChangeEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslations } from 'next-intl'
import { object, string } from 'yup'

import { Button } from '@/app/components/ui/Button'
import { Toast } from '@/app/components/ui/Toast'

import styles from './MailForm.module.scss'

const schema = object({
  user_email: string().email()
})

export const MailForm = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' })

  const t = useTranslations()

  const validate = async () => {
    try {
      await schema.validate({ user_email: email })
    } catch (error) {
      throw new Error('Please enter a valid email')
    }
  }

  const handleSendForm = async () => {
    setStatus({ type: '', message: '' })
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
      setStatus({ type: 'success', message: 'email has been successfuly sended ' })
      setEmail('')
    } catch (error) {
      if (error instanceof Error) {
        setStatus({ type: 'error', message: error.message })
        console.log(error)
      }
    }
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleCloseToast = () => {
    setStatus({ type: '', message: '' })
  }

  return (
    <div className={styles.root}>
      <Toast isOpen={!!status.message.length} onClose={handleCloseToast} type={status.type}>
        {status.message}
      </Toast>
      <h2>{t('footer')}</h2>

      <div className={styles.form}>
        <div className={styles.input}>
          <input type='email' name='email' value={email} onChange={handleChangeInput} placeholder='Enter Your Email' />
        </div>
        <Button variant='primary' onClick={handleSendForm}>
          Subscribe
        </Button>
      </div>
    </div>
  )
}
