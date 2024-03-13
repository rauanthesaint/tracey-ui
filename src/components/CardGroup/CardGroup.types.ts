import { HTMLAttributes } from 'react'

export interface ICardGroupProps extends HTMLAttributes<HTMLDivElement> {
    gap?: number | string
    min?: number | string
    max?: number | string
}
