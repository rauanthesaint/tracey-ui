import React, { FC } from 'react'
import clsx from 'clsx'
import { IParagraphProps } from './Paragraph.types'
import styles from './paragraph.module.scss'

const Paragraph: FC<IParagraphProps> = ({ children, id, className }) => {
    return (
        <p className={clsx(className, styles.Paragraph)} id={id}>
            {children}
        </p>
    )
}

export default Paragraph
