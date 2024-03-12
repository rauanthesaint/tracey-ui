import React, { FC } from 'react'
import { IHaedingProps } from './Heading.types'
import clsx from 'clsx'
import styles from './heading.module.scss'

const Heading: FC<IHaedingProps> = ({ children, className, id }) => {
    return (
        <h2 className={clsx(className, styles.Heading)} id={id}>
            {children}
        </h2>
    )
}

export default Heading
