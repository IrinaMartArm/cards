import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './input.module.scss'

export type InputProps<T extends ElementType> = {
  type: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<T>
export const Input = <T extends ElementType = 'input'>(
  props: InputProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof InputProps<T>>
) => {
  const { className, type, ...rest } = props

  return <input className={`${s.input} ${className}`} type={type} {...rest} />
}
