import React from 'react'
import { usePagination } from '../../hooks/usePagination'
import cl from './pagination.module.css'

const Pagination = ({limit, page, total, changePage }) => {
  const pagination = usePagination(limit, total)

  const paginationList = pagination.map(p => {
    const itemClasses = [cl.paginationItem]
    let change = changePage

    if (p === page) {
      itemClasses.push(cl.active)
      change = undefined
    }

    return  (
      <span
        className={itemClasses.join(' ')} key={p}
        onClick={() => change(p)}
      >
        {p}
      </span>)
  })

  return (
    <div className={cl.pagination}>
      {paginationList}
    </div>
  )
}

export default Pagination