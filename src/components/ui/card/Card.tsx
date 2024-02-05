import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './card.module.scss'

export type CardProps<T extends ElementType> = {} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType>(
  props: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>
) => {
  const { className, ...rest } = props

  return <div className={`${s.card} ${className}`} {...rest} />
}
