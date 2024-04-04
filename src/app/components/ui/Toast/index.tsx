'use client'
import { FC, useEffect } from 'react'
import classNames from 'classnames'

import { MotionDiv } from '../../shared/Motion'

import { IToastProps } from './types'

import styles from './Toast.module.scss'

export const Toast: FC<IToastProps> = ({ isOpen, children, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 1500)
    return () => clearTimeout(timer)
  }, [onClose])
  if (!isOpen) return null

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={classNames(styles.root, {
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </MotionDiv>
  )
}
