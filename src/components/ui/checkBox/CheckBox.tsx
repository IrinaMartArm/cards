import { FC, ReactNode } from 'react'

import { Check } from '@/images/icons/svgs/Check'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'
import { AnimatePresence } from 'framer-motion'

import s from './checkBox.module.scss'

export type CheckboxProps = {
  checked: boolean
  className?: string
  disabled?: boolean
  label?: ReactNode
  onChange: (checked: boolean) => void
}

export const CheckBox: FC<CheckboxProps> = ({ checked, className, disabled, label, onChange }) => {
  const classNames = {
    arrowColor: clsx(disabled ? 'var(--color-light-700)' : ''),
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    checkColor: clsx(disabled ? 'var(--color-dark-100)' : 'var(--color-light-900)'),
    container: clsx(s.container, className),
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root className={classNames.label}>
        <div className={classNames.buttonWrapper}>
          <CheckboxRadix.Root
            checked={checked}
            className={s.root}
            disabled={disabled}
            onCheckedChange={onChange}
          >
            <AnimatePresence initial={false}>
              {checked && (
                <CheckboxRadix.Indicator asChild className={s.indicator} forceMount>
                  <Check
                    arrowColor={classNames.arrowColor}
                    color={classNames.checkColor}
                    size={20}
                  />
                </CheckboxRadix.Indicator>
              )}
            </AnimatePresence>
          </CheckboxRadix.Root>
        </div>
        {label}
      </LabelRadix.Root>
    </div>
  )
}
