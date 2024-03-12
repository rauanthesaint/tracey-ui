import React, { FC } from 'react'
import { IDisplayProps } from './Display.types'
import clsx from 'clsx'
import styles from './display.module.scss'

const Display: FC<IDisplayProps> = ({ children, className, id }) => {
    return (
        <h1 className={clsx(className, styles.Display)} id={id}>
            {children}
        </h1>
    )
}

export default Display
