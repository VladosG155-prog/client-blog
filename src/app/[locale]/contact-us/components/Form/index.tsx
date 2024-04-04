'use client'
import { ChangeEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslations } from 'next-intl'
import { Map, Marker } from 'react-map-gl'
import { object, string } from 'yup'

import { Button } from '@/app/components/ui/Button'
import { Icon } from '@/app/components/ui/Icon'
import 'mapbox-gl/dist/mapbox-gl.css'

import styles from './Form.module.scss'

const schema = object({
  from_name: string(),
  email: string().email(),
  query: string(),
  message: string().max(150)
})

export const Form = () => {
  const [formData, setFormData] = useState({})

  const t = useTranslations()

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [error, setError] = useState('')

  const validate = async () => {
    try {
      await schema.validate({ ...formData })
    } catch (error) {
      throw new Error('Please enter a valid data')
    }
  }

  const handleSendForm = async () => {
    setError('')
    try {
      await validate()

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT as string,
        { ...formData },
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

  return (
    <div className={styles.root}>
      <input type='text' name='from_name' onChange={handleChange} placeholder='Full Name' />
      <input type='text' name='email' onChange={handleChange} placeholder='Your Email' />
      <input type='text' name='query' onChange={handleChange} placeholder='Query Related  ' />
      <textarea name='message' onChange={handleChange} placeholder='Message'></textarea>
      {error.length > 0 && <p>{error}</p>}
      <Button variant='primary' onClick={handleSendForm} size='full'>
        {t('Send message')}
      </Button>
      <div className={styles.map}>
        <Map
          mapboxAccessToken='pk.eyJ1IjoidmxhZG9zZzE1NSIsImEiOiJjbHMzajM5bGUwc2FyMm5yd3Nmb25najhxIn0.i4DiJJ6_3snwgYzclLTqew'
          initialViewState={{
            longitude: 15.995726271961736,
            latitude: 52.42159941323625,
            zoom: 5
          }}
          mapStyle={'mapbox://styles/mapbox/light-v11'}
        >
          <Marker anchor='top' latitude={52.868810602807166} longitude={18.57822980365868}>
            <Icon name='marker' />
          </Marker>

          <Marker anchor='top' latitude={53.260423475880714} longitude={27.927975631212462}>
            <Icon name='marker' />
          </Marker>
          <Marker anchor='top' latitude={51.098152958945654} longitude={10.292974614669726}>
            <Icon name='marker' />
          </Marker>
        </Map>
      </div>
    </div>
  )
}
