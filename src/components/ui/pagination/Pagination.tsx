import { LeftArrowButton } from '@/components/ui/pagination/LeftArrowButton'
import { PaginationButtons } from '@/components/ui/pagination/PaginationButtons'
import { RightArrowButton } from '@/components/ui/pagination/RightArrowButton'
import { SelectGroup } from '@/components/ui/pagination/SelectGroup'

import s from './pagination.module.scss'

import { usePagination } from './usePagination'

type PaginationType = {
  className?: string
  currentPage: number
  onPageChange: (page: number) => void
  pageSize: number
  siblingCount: number
  totalCount: number
}

export const Pagination = (props: PaginationType) => {
  const { currentPage, onPageChange, pageSize, siblingCount = 1, totalCount } = props

  const { handlePageClicked, isFirstPage, isLastPage, onNext, onPrevious, paginationRange } =
    usePagination({
      currentPage,
      onPageChange,
      pageSize,
      siblingCount,
      totalCount,
    })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  return (
    <div className={s.root}>
      <div className={s.paginationContainer}>
        <LeftArrowButton disabled={isFirstPage} onClick={onPrevious} />

        <PaginationButtons
          currentPage={currentPage}
          onClick={handlePageClicked}
          paginationRange={paginationRange}
        />

        <RightArrowButton disabled={isLastPage} onClick={onNext} />
      </div>
      <SelectGroup />
    </div>
  )
}
