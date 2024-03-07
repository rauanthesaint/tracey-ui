import React, { FC } from 'react'
import { IPropsButton } from './Button.types'
import clsx from 'clsx'
import styles from './button.module.scss'

/**
 * Button Component
 *
 * @component
 * @param {Object} props - The properties of the Button component.
 * @param {boolean} [props.autoFocus] - If true, the button will automatically receive focus when rendered.
 * @param {boolean} [props.disabled] - If true, the button will be disabled.
 * @param {'button' | 'submit' | 'reset'} [props.type] - The type of the button.
 * @param {() => void} [props.onClick] - The function to be called when the button is clicked.
 * @param {React.ReactNode} [props.children] - The content to be displayed inside the button.
 * @param {string} [props.className] - Additional CSS classes for the button.
 * @param {React.CSSProperties} [props.style] - Inline styles for the button.
 * @param {string} [props.id] - The HTML id attribute for the button.
 * @param {string} [props.title='Trcaey UI Button'] - The title attribute for the button.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - The size variant of the button ('sm', 'md', 'lg').
 * @param {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'} [props.variant='primary'] - The color variant of the button.
 * @returns {React.ReactElement} The rendered Button component.
 */
const Button: FC<IPropsButton> = ({
    autoFocus,
    disabled,
    type,
    onClick,
    children,
    className,
    style,
    id,
    title = 'Trcaey UI Button',
    size = 'md',
    variant = 'primary',
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            autoFocus={autoFocus}
            id={id}
            style={style}
            className={clsx(
                className,
                styles.Button,
                styles[size],
                styles[variant]
            )}
            title={title}
        >
            {children}
        </button>
    )
}

export default Button
