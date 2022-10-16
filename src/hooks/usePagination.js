import { useMemo } from 'react'

export const usePagination = (limit, total) => {
  return useMemo(() => {
    const pagination = []
    const count = Math.ceil(total / limit)

    for (let i = 1; i <= count; i++) {
      pagination.push(i)
    }
    return pagination
  }, [limit, total])
}
