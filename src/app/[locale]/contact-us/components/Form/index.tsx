'use client'
import 'mapbox-gl/dist/mapbox-gl.css'

import { Map, Marker } from 'react-map-gl'

import { Button } from '@/app/components/ui/Button'
import { Icon } from '@/app/components/ui/Icon'

import styles from './Form.module.scss'
export const Form = () => {
  return (
    <div className={styles.root}>
      <input type='text' placeholder='Full Name' />
      <input type='text' placeholder='Your Email' />
      <input type='text' placeholder='Query Related  ' />
      <textarea placeholder='Message'></textarea>
      <Button variant='primary' size='full'>
        Send Message
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
