import { useEffect, useState } from 'react';

const getUserValue = (key, initialValue) => {
  const savedUser = JSON.parse(localStorage.getItem(key))
  if (savedUser) return savedUser

  if (initialValue instanceof Function) return initialValue()
  return initialValue
}

export const UseLocalStoage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getUserValue(key, initialValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
};
