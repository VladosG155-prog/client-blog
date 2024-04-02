import { ButtonHTMLAttributes } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'white' | 'primary'
  size?: 'md' | 'sm' | 'xl' | 'full'
}
