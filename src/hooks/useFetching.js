import { useState } from 'react'

export const useFetching = (cb) => {
  const [isLoad, setIsLoad] = useState(false)
  const [error, setError] = useState('')

  const fetching = async (...args) => {
    setIsLoad(true)
    try {
      await cb(...args)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoad(false)
    }
  }

  return [fetching, isLoad, error]
}