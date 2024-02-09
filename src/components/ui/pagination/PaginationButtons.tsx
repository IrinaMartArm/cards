import { FC } from 'react'

import { clsx } from 'clsx'

import s from './pagination.module.scss'

type PaginationButtonsType = {
  currentPage: number
  disabled?: boolean
  onClick: (pageNumber: number) => void
  paginationRange: (number | string)[]
}

const classNames = {
  dots: s.dots,
  item: s.item,
  pageButton(selected?: boolean) {
    return clsx(this.item, selected && s.selected)
  },
}

export const PaginationButtons: FC<PaginationButtonsType> = ({
  currentPage,
  onClick,
  paginationRange,
}) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        // If the pageItem is a DOT, render the DOTS unicode character
        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        // Render our Page Pills
        return (
          <div
            className={classNames.pageButton(isSelected)}
            key={index}
            onClick={() => onClick(page)}
          >
            {page}
          </div>
        )
      })}
    </>
  )
}

// type PageButtonProps = {
//   disabled?: boolean
//   onClick: () => void
//   page: number
//   selected: boolean
// }
// const PageButton: FC<PageButtonProps> = ({ disabled, onClick, page, selected }) => {
//   return (
//     <button
//       className={classNames.pageButton(selected)}
//       disabled={selected || disabled}
//       onClick={onClick}
//     >
//       {page}
//     </button>
//   )
// }

const Dots: FC = () => {
  return <span className={s.dots}>&#8230;</span>
}
