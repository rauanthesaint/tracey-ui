import React, { FC } from 'react'
import clsx from 'clsx'
import { ICardProps } from './Card.types'
import styles from './card.module.scss'

const Card: FC<ICardProps> = ({ className, id, children }) => {
    return (
        <article className={clsx(className, styles.Card)} id={id}>
            {children}
        </article>
    )
}
export default Card
