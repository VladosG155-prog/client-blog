import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { IModalProps } from './types'

import styles from './Modal.module.scss'

export const Modal: FC<IModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
    document.body.style.paddingRight = paddingOffset
    document.body.style.overflowY = 'hidden'

    return () => {
      document.body.style.paddingRight = '0px'
      document.body.style.overflowY = 'scroll'
    }
  }, [])

  return createPortal(
    <div className={styles.container}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.root}>{children}</div>
    </div>,
    document.body
  )
}
