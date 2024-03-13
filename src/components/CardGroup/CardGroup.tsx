import React, { FC } from 'react'
import { ICardGroupProps } from './CardGroup.types'
import clsx from 'clsx'
import styles from './card_group.module.scss'

const CardGroup: FC<ICardGroupProps> = ({
    children,
    className,
    id,
    gap = 8,
    min = '16rem',
    max = '1fr',
}) => {
    return (
        <div
            className={clsx(className, styles.CardGroup)}
            id={id}
            style={{
                gap: gap,
                gridTemplateColumns: `repeat(auto-fit, minmax(${min}, ${max}))`,
            }}
        >
            {children}
        </div>
    )
}

export default CardGroup
