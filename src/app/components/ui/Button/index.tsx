import { FC } from 'react'

import { IButtonProps } from './types'

import styles from './Button.module.scss'

export const Button: FC<IButtonProps> = ({ variant, children, ...props }) => {
  return (
    <button data-variant={variant} className={styles.root} {...props}>
      {children}
    </button>
  )
}
