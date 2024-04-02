'use client'
import { ChangeEvent, useMemo, useState } from 'react'
import classNames from 'classnames'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { CategoriesList } from '@/app/components/shared/CategoriesList'
import { Button } from '@/app/components/ui/Button'
import { tags } from '../../config'

import styles from './SideBar.module.scss'
export const SideBar = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [searchValue, setSearchValue] = useState('')

  const [isShowSearch, setIsShowSearch] = useState(false)

  const setSearchParams = (value: string) => () => {
    const params = new URLSearchParams(searchParams)

    if (params.has('tags', value)) {
      params.delete('tags', value)
    } else {
      params.append('tags', value)
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const handleClickSearch = () => {
    const params = new URLSearchParams(searchParams)

    params.append('tags', searchValue)
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
    router.refresh()
    setSearchValue('')
  }

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleClickInput = () => {
    setIsShowSearch((prev) => !prev)
  }

  const handleClickMenu = (tag: string) => () => {
    setSearchValue(tag)
    handleClickInput()
  }

  const filteredTags = useMemo(() => {
    return tags.filter((tag) => tag.value.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue])

  return (
    <aside>
      <div className={styles.search}>
        <div className={styles.searchMenu}>
          <input
            type='text'
            onClick={handleClickInput}
            value={searchValue}
            onChange={handleChangeSearchInput}
            placeholder='Search for tag...'
          />
          <div onClick={handleClickSearch} className={styles.btn}>
            <Button variant='primary' size='sm'>
              Search
            </Button>
          </div>
        </div>

        {isShowSearch && (
          <div className={styles.searchOptions}>
            {filteredTags.map(({ value, id }) => (
              <span key={id} onClick={handleClickMenu(value)}>
                {value}
              </span>
            ))}
          </div>
        )}
      </div>
      <div>
        <CategoriesList
          activeCategory={searchParams.get('val') || ''}
          title='Categories'
          direction='column'
          isSmallCard={true}
        />
      </div>
      <div className={styles.tags}>
        <h3>All Tags</h3>
        <div className={styles.tagsWrapper}>
          {tags.map(({ value, id }) => (
            <span
              className={classNames('', { [styles.active]: searchParams.has('tags', value) })}
              onClick={setSearchParams(value)}
              key={id}
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </aside>
  )
}
