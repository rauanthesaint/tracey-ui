import { InputHTMLAttributes } from 'react'

export interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
    title?: string
    label?: string
    hint?: string
}
