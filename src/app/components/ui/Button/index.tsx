import { FC } from 'react'

import { IButtonProps } from './types'

import styles from './Button.module.scss'

export const Button: FC<IButtonProps> = ({ variant, children, size, ...props }) => {
  return (
    <button data-variant={variant} data-size={size} className={styles.root} {...props}>
      {children}
    </button>
  )
}
