import { useEffect, useState } from 'react';

type ReturnValue = [any, ( value: any ) => void]

export const useLocalStorage = (key: string, initial: any): ReturnValue => {
  const item = window.localStorage.getItem(key)
  const [value, setValue] = useState(item || initial)

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [value, key, initial]);

  return [value, setValue]
}

export default useLocalStorage
