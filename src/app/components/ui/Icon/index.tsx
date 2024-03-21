import { FC } from 'react'

import { iconNames } from './config'
import { IIconProps } from './types'

export const Icon: FC<IIconProps> = ({ name, ...props }) => {
  const Component = iconNames[name]

  return <Component data-testid='icon' {...props} />
}