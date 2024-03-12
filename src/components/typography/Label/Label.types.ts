import { HTMLAttributes } from 'react'

export interface ILabelProps extends HTMLAttributes<HTMLHeadElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg'
}
