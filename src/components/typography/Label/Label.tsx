import React, { FC } from 'react'
import { ILabelProps } from './Label.types'
import clsx from 'clsx'
import styles from './label.module.scss'

const Label: FC<ILabelProps> = ({ className, children, size = 'md', id }) => {
    return (
        <span className={clsx(className, styles.Label, styles[size])} id={id}>
            {children}
        </span>
    )
}

export default Label
