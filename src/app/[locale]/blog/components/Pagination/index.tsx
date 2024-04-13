'use client'
import { FC } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { IPaginationProps } from './Pagination.types'

import styles from './Pagination.module.scss'

export const Pagination: FC<IPaginationProps> = ({ hasNextPage, hasPrevPage }) => {
  const router = useRouter()

  const searchParams = useSearchParams()

  const page = searchParams.get('page') || 1

  const handlePrevClick = () => {
    router.push(`?page=${+page - 1}#posts`, { scroll: true })
  }

  const handleNextClick = () => {
    router.push(`?page=${+page + 1}#posts`, { scroll: true })
  }

  return (
    <div className={styles.nav}>
      <button className={styles.prev} disabled={!hasPrevPage} onClick={handlePrevClick}>
        {'<'}Prev
      </button>
      <button className={styles.next} disabled={!hasNextPage} onClick={handleNextClick}>
        Next{'>'}
      </button>
    </div>
  )
}
