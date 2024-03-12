import { ButtonHTMLAttributes } from 'react'
export interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string
    size?: 'sm' | 'md' | 'lg'
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger'
    shape?: 'icon' | 'rectangle'
}
