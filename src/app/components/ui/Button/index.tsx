import { FC } from 'react'

import { IButtonProps } from './types'

export const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}
