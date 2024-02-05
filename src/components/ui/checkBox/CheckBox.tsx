import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './checkBox.module.scss'

export type CheckBoxProps<T extends ElementType> = {} & ComponentPropsWithoutRef<T>

export const CheckBox = <T extends ElementType = 'input'>(
  props: CheckBoxProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CheckBoxProps<T>>
) => {
  const { className, ...rest } = props

  return <input className={`${s.checkBox} ${className}`} type={'checkbox'} {...rest} />
}
