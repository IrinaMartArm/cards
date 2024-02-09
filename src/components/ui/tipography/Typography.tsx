import { ComponentProps, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

type PropsType<T extends ElementType> = {
  as?: T
  children: ReactNode
  variant: TypographyVariantTypes
} & ComponentProps<T>

export const Typography = <T extends ElementType = 'div'>({
  as: Component = 'div',
  children,
  className,
  variant,
  ...rest
}: PropsType<T> & Omit<ComponentProps<T>, keyof PropsType<T>>) => {
  return (
    <Component className={`${s[variant]}`} {...rest}>
      {children}
    </Component>
  )
}
export type TypographyVariantTypes =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'caption-bold'
  | 'caption-link'
  | 'error'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'link1'
  | 'overline'
  | 'subtitle-link'
  | 'subtitle1'
  | 'subtitle2'
