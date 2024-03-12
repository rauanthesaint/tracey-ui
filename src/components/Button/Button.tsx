import React, { FC } from 'react'
import { IPropsButton } from './Button.types'
import clsx from 'clsx'
import styles from './button.module.scss'

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
