import { useState } from 'react'


export const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const value = window.localStorage.getItem(key)

    if (value) {
      return JSON.parse(value)
    }

    window.localStorage.setItem(key, JSON.stringify(defaultValue))
    return defaultValue
  })

  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
    setStoredValue(value)
  }

  return [storedValue, setValue]
}
