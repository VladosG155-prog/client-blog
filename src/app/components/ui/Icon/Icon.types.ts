import { SVGAttributes, SVGProps } from 'react'

import { iconNames } from './config'

export interface IIconProps extends SVGProps<SVGAttributes<SVGElement>> {
  name: string
}
