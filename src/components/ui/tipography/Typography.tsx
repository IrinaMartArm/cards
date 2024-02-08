import { ComponentProps, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

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
  const classNames = { textClassName: clsx(variant && s[variant], className) }

  return (
    <Component className={classNames.textClassName} {...rest}>
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
  | 'link2'
  | 'overline'
  | 'subtitle-link'
  | 'subtitle1'
  | 'subtitle2'
