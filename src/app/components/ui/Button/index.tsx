'use client'
import { FC } from 'react'
import { motion, MotionProps } from 'framer-motion'

import { IButtonProps } from './types'

import styles from './Button.module.scss'

export const Button: FC<IButtonProps & MotionProps> = ({ variant, children, size, ...props }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.25 }}
      data-variant={variant}
      data-size={size}
      className={styles.root}
      {...props}
    >
      {children}
    </motion.button>
  )
}
