import { ReactNode } from 'react'

export interface IToastProps {
  isOpen: boolean
  children: ReactNode
  type: string
  onClose: () => void
}
