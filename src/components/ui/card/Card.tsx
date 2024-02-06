import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import s from './card.module.scss'

type CardProps = {
  ClassName?: string
  children?: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Card: FC<CardProps> = ({ ClassName, children, ...rest }) => {
  return (
    <div className={`${s.card}`} {...rest}>
      <div>{children}</div>
    </div>
  )
}
