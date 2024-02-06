import { ComponentPropsWithoutRef } from 'react'

import { Search } from '@/images/icons/svgs/Search'

import s from './input.module.scss'

export type InputProps = {
  type: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>
export const Input = (props: InputProps) => {
  const { className, type, ...rest } = props

  const passwordStyles = type === 'password' ? s.password : ''

  return (
    <>
      <input className={`${s.input} ${passwordStyles} ${className}`} type={type} {...rest} />
      {type === 'password' ? <Search /> : null}
    </>
  )
}
