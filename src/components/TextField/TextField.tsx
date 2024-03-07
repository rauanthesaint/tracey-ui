import React, { FC } from 'react'
import { IPropsInput } from './TextField.types'

import styles from './text_field.module.scss'
import clsx from 'clsx'

const TextFiled: FC<IPropsInput> = ({
    accessKey,
    autoComplete,
    autoFocus,
    className,
    disabled,
    list,
    name,
    pattern,
    placeholder,
    readOnly,
    tabIndex,
    value,
    id,
    title = 'Tracey UI Input',
    label,
    hint,
}) => {
    return (
        <div className={clsx(styles.TextField, className)}>
            <div className={styles.TextField__Label}>
                <label htmlFor={name}>{label}</label>
            </div>
            <div className={styles.TextField__Container}>
                <input
                    title={title}
                    type="text"
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    tabIndex={tabIndex}
                    readOnly={readOnly}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    accessKey={accessKey}
                    pattern={pattern}
                    list={list}
                />
            </div>
            <div className={styles.TextField__Hint}>{hint}</div>
        </div>
    )
}

export default TextFiled

// TODO: Placeholder, rules, validation, isvalid, readonly, pattern, list, controlling,
